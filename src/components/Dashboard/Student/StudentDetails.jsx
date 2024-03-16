
import React, { useEffect, useState } from 'react'
 import user from '../../../MyImages/defaultUser.jpg'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TbArrowBackUp } from "react-icons/tb";
import { IoReceipt } from "react-icons/io5";
import DataTable from 'react-data-table-component';
import StudentViewSection from './StudentViewSection';
import StudentFeesCollect from './StudentFeesCollect';
import StudentAdmission from './StudentAdmission';
import axios from 'axios';



function StudentDetails({fees,view}) {
   
    const [search, setSearch] = useState('')
    const [pannel,setPannel]=useState('');
    const [row,setRow]=useState({});

    const [studentinfo, setStudentIfo] = useState([])
    const [studentData, setStudentData] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3000/readstudentinfo/')
        .then(data=>{setStudentIfo(data.data);setStudentData(data.data)})
          .catch(err=>console.log(err))
      },[])

    const columns = [
        {
            name: 'Photo',
            selector: row => <img src={user} style={{ width: '7vmin', height: '7vmin', objectFit: 'cover', borderRadius: '50%', padding: '5px' }} />
        },
        {
            name: 'Name',
            selector: row => row.firstName
        },
        {
            name: 'Roll No',
            selector: row => row.roll,
            sortable: 'true'
        },
        {
            name: 'Class',
            selector: row => row.class
        },
        {
            name: 'City',
            selector: row => row.city
        },
        {
            name: 'Phone',
            selector: row => row.phone
        },
view==true ?   {
            name: 'Action',
            selector: row => <button className='stdEyeBtn' >
                 <FaEye color='black' onClick={()=>viewBtn(row.id)}/> 
                 <CiEdit color='black' className='ms-2' onClick={() =>editStdDetails(row)}/> </button>
                }:
fees==true && {   
            name: 'Action',
            selector: row => <button className='stdEyeBtn' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setRow(row)}> <IoReceipt color='black' /> collect fees</button>
                },
    ]


   
    const editStdDetails=(row)=>{
        setRow(row);
        setPannel('edit')
    }
    const viewBtn=(row)=>{
        setRow(row);
        setPannel('view')
    }
   
    useEffect(() => {
        setStudentData(studentinfo);
        const result = studentinfo.filter((student) => (
            student.firstName.toLowerCase().match(search.toLowerCase())
        ))
        setStudentData(result)
    }, [search])


    return (
        <>

                { pannel==''  &&
                    <DataTable data={studentData} columns={columns}
                    title='All Student'
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='65vmin'
                    subHeader
                    subHeaderComponent={
                        <input type='text' placeholder='search fere'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }
                />
                }

                {
                         pannel=='view' && (
                         <>
                            <button className='shadow px-2  btn btn-dark btn-sm' onClick={()=>setPannel('')}>Go Back <TbArrowBackUp size={20}/></button>
                            <StudentViewSection id={row}/>
                         </>)
                }
                {
                         pannel=='edit' && (
                         <>
                            <button className='shadow px-2 stdEyeBtn' onClick={()=>setPannel('')}>Go Back <TbArrowBackUp size={20}/></button>
                            <StudentAdmission data={row}/>
                         </>)
                }


{/*           Modal             */}

<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
        <StudentFeesCollect data={row}/>
      
    </div>
  </div>
</div>

        </>
    )
}

export default StudentDetails