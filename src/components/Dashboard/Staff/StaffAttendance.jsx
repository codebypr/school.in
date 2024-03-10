import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { FaSave } from "react-icons/fa";
import { addAttendance } from '../../../store/StudentAttendanceSlice';
import Alert from '../../Alert';
import axios from 'axios';

function StaffAttendance() {

    const [teacherData, setTeacherData] = useState([]);
    const [attState, setAttState] = useState({});
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        ; (async () => {
            const result = await axios.get('http://localhost:3000/readteacherinfo')
            setTeacherData(result.data);

        })()
    }, [])


    const columns = [
        {
            name: 'Teacher ID',
            selector: row => row.id
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
            name: 'Attendance',
            selector: row => <div>
                <input className="form-check-input " type="radio" name={row.id} id={row.id} value="P" />
                <label className="form-check-label me-2 ms-1" >Present</label>
                <input className="form-check-input " type="radio" name={row.id} id={row.id} value="A" />
                <label className="form-check-label me-2 ms-1" >Absent</label>
                <input className="form-check-input " type="radio" name={row.id} id={row.id} value="H" />
                <label className="form-check-label me-2 ms-1" >Holiday</label>

            </div>
        }
    ]

    const saveAtt = (e) => {
        e.preventDefault();
        const date = document.getElementById('date');
        date.value;
        teacherData.map((tec) => {
            let ele = document.getElementsByName(tec.id)
            ele.forEach((input) => {
                if (input.checked) {
                    attState.id = tec.id;
                    attState.date = date.value;
                    attState.att = input.value
                    axios.post('http://localhost:3000/sendtecattendance',attState)
                    .then(setAlert(true))
                    .catch(err=>console.log(" Attendence not added ! "+err))
                    
                    setTimeout(() => {
                        setAlert(false)
                    }, 2000)
                }
            })
        })
    }

    return (
        <>

            <form onSubmit={saveAtt}>
                <div className="container first mb-1 row">
                    <div className=' bg-secondary-subtle p-2 px-4 mb-2' ><b>Teacher Attendance</b></div>

                    <div className='col-4'>

                        <label >Date</label>
                        <input type="date" id='date' className="form-control ps-2 p-0" required />
                    </div>
                </div>
                {alert &&
                    <Alert type={'primary'} msg={'Attendance sucessully added !'} />
                }
                <DataTable data={teacherData} columns={columns}

                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='58vmin'
                    subHeader
                    subHeaderComponent={

                        <button className='me-3' type='submit'><FaSave /> Save Attendance</button>

                    }
                />
            </form>
        </>
    )
}

export default StaffAttendance
