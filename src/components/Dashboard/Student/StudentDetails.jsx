
import React, { useEffect, useState } from 'react'
 import user from '../../../MyImages/defaultUser.jpg'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TbArrowBackUp } from "react-icons/tb";
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import StudentViewSection from './StudentViewSection';


function StudentDetails() {
    const studentinfo = useSelector(state => state.stdReducer.studentData)
    const [search, setSearch] = useState('')
    const [pannel,setPannel]=useState('');

    const [studentData, setStudentData] = useState([])

    const columns = [
        {
            name: 'Photo',
            selector: row => <img src={user} style={{ width: '7vmin', height: '7vmin', objectFit: 'cover', borderRadius: '50%', padding: '5px' }} />
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Roll No',
            selector: row => row.roll,
            sortable: 'true'
        },
        {
            name: 'Class',
            selector: row => row.clas
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
            selector: row => <button className='stdEyeBtn' > <FaEye color='black' onClick={() => setPannel('view')}/> <CiEdit color='black' className='ms-2' onClick={() => editStdDetails(row)}/> </button>
        },
    ]


   
    const editStdDetails=(row)=>{
        alert("Class : "+row.clas)
    }

    useEffect(() => {
        setStudentData(studentinfo);
        const result = studentinfo.filter((student) => (
            student.name.toLowerCase().match(search.toLowerCase())
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
                            <button className='shadow px-2 stdEyeBtn' onClick={()=>setPannel('')}>Go Back <TbArrowBackUp size={20}/></button>
                            <StudentViewSection/>
                         </>)
                }

        </>
    )
}

export default StudentDetails