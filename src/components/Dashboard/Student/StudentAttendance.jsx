import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { FaSave } from "react-icons/fa";
import { addAttendance } from '../../../store/StudentAttendanceSlice';

function StudentAttendance() {
    const stdInfo = useSelector(state => state.stdReducer.studentData)
    const [studentData, setStudentData] = useState([]);
    const [search, setSearch] = useState('');
    const [attState, setAttState] = useState({});

    const dispatch = useDispatch();

    const columns = [
        {
            name: 'Admission No',
            selector: row => row.id
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Roll No',
            selector: row => row.roll
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
        studentData.map((std) => {
            let ele = document.getElementsByName(std.id)
            ele.forEach((input) => {
                if (input.checked) {
                    attState.id=std.id;
                    attState.date=date.value;
                    attState.att=input.value
                    dispatch(addAttendance(attState));
                    }
                })
        })

        
    }

    useEffect(() => {
        setStudentData(stdInfo);
        const result = stdInfo.filter((student) => (
            student.clas.toLowerCase().match(search.toLowerCase())
        ))
        setStudentData(result)
    }, [search])
    return (
        <>
            <form onSubmit={saveAtt}>
                <div className="container first mb-5 row">
                    <div className=' bg-secondary-subtle p-2 px-4 mb-2' ><b>Student Attendance</b></div>
                    <div className='col-4'>
                        <label > Class </label>
                        <select className="form-select ps-2 p-0"
                            onChange={(e) => setSearch(e.target.value)}
                        >
                            <option >select</option>
                            <option value={'1st'}>1st</option>
                            <option value={'12th'}>12th</option>
                        </select>
                    </div>
                    <div className='col-4'>
                        <label > Section </label>
                        <select className="form-select ps-2 p-0" >
                            <option >select</option>
                            <option value={'A'}>A</option>
                            <option value={'B'}>B</option>
                        </select>
                    </div>
                    <div className='col-4'>

                        <label >Attendance Date</label>
                        <input type="date" id='date' className="form-control ps-2 p-0" required />
                    </div>
                </div>
                <DataTable data={studentData} columns={columns}
                    title={'Student List'}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='56vmin'
                    subHeader
                    subHeaderComponent={

                        <button className='me-3' type='submit'><FaSave /> Save Attendance</button>

                    }
                />
            </form>
        </>
    )
}

export default StudentAttendance
