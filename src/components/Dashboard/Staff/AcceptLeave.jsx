import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { MdSmsFailed,MdOutlineDoneAll  } from "react-icons/md";

function AcceptLeave() {

    const [leaveData,setLeaveData] = useState([]);
    const [increment,setIncrement] = useState(1);

    useEffect(()=>{
        ;(async()=>{
            const result = await axios.get('http://localhost:3000/readleave')
            setLeaveData(result.data)
        })()
    },[increment])
    
    const columns = [
        {
            name: 'ID',
            selector: row =>  row.id
        },
        
        {
            name: 'Name',
            selector: row => row.name
        },
        
        {
            name: 'Role',
            selector: row => row.userType
        },
        {
            name: 'From',
            selector: row => row.fromDate
        },
        {
            name: 'To',
            selector: row => row.toDate
        },
        {
            name: 'Reason',
            selector: row => row.message
        },
        {
            name: 'Action',
            selector: row => <div  >
                        <button className='btn btn-success btn-sm p-0 px-1'><MdOutlineDoneAll color='white' 
                        onClick={()=>AcceptRejectBtn(row.leaveID,1)}
                        /></button> 
                        <button className='btn btn-danger btn-sm p-0 px-1 ms-2'><MdSmsFailed color='white' 
                       onClick={()=>AcceptRejectBtn(row.leaveID,0)}
                        /></button> 
                        </div>            
            }
    ]

    const AcceptRejectBtn = (id,val)=>{
        axios.put('http://localhost:3000/acceptReject/'+id,{value:val})
        .then((res)=>setIncrement(pre=>pre+1))
        .catch(err=>console.log(err))
        console.log(id,val);
    }
  return (
    <>
       <div className="container w-75">
        {
            leaveData.length !=0 &&
            <DataTable data={leaveData} columns={columns}/>

        }
       </div>
    </>
  )
}

export default AcceptLeave