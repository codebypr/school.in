
import React, { useEffect, useState } from 'react'
 import user from '../../../MyImages/defaultUser.jpg'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TbArrowBackUp } from "react-icons/tb";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import ViewTeacher from './ViewTeacher';
import AddNewStaff from './AddNewStaff';




function StaffDetails() {
    
    const [search, setSearch] = useState('')
    const [pannel,setPannel]=useState('');
    const [row,setRow]=useState({});
    const [values,setValues]=useState([]);
    const [realValues,setRealValues]=useState([]);

  
    
    useEffect(() => {
        ; (async () => {
          const result = await axios.get('http://localhost:3000/readteacherinfo')
          setValues(result.data);
          setRealValues(result.data);
        })()
      }, [])

    const columns = [
        {
            name: 'Date of Joining',
            selector: row => row.doj
        },
        {
            name: 'Photo',
            selector: row => <img src={user} style={{ width: '7vmin', height: '7vmin', objectFit: 'cover', borderRadius: '50%', padding: '5px' }} />
        },
        {
            name: 'Name',
            selector: row => row.firstName
        },
        
        {
            name: 'Role',
            selector: row => row.role
        },
        {
            name: 'City',
            selector: row => row.city
        },
        {
            name: 'Phone',
            selector: row => row.phone
        },
        {
            name: 'Action',
            selector: row => <button className='stdEyeBtn' >
                 <FaEye color='black' onClick={()=>viewBtn(row)}/> 
                 <CiEdit color='black' className='ms-2' onClick={() =>editStdDetails(row)}/> </button>
            }
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
        const result = realValues.filter((student) => (
            student.firstName.toLowerCase().match(search.toLowerCase())
        ))
        setValues(result)
    }, [search])


    return (
        <>

                { pannel==''  &&
                    <DataTable data={values} columns={columns}
                    title='All Staff Members'
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
                            <button className='shadow px-2 btn btn-dark btn-sm' onClick={()=>setPannel('')}>Go Back <TbArrowBackUp size={20}/></button>
                            <ViewTeacher id={row.id}/>
                         </>)
                }
                {
                         pannel=='edit' && (
                         <>
                            <button className='shadow px-2 stdEyeBtn' onClick={()=>setPannel('')}>Go Back <TbArrowBackUp size={20}/></button>
                            <AddNewStaff data={row}/>
                         </>)
                }

        </>
    )
}

export default StaffDetails