import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CitySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { addNewStudent, editStudentDetails } from '../../../store/StudentDataSlice';
import Alert from '../../Alert';



function StudentAdmission({ data }) {
    const [alert, setAlert] = useState(false);
    const [editAlert, setEditAlert] = useState(false);
    const [btnView, setBtnView] = useState(true);
    const [err, setErr] = useState('');
    const [stateid, setstateid] = useState(0);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        roll: '',
        class: '',
        section: '',
        gender: '',
        dob: '',
        phone: '',
        religion: '',
        category: '',
        caste: '',
        admissionDate: '',
        state: '',
        city: '',
        address: '',
        fatherName: '',
        fatherPhone: '',
        fatherOcc: '',
        motherName: '',
        motherPhone: '',
        motherOcc: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.state == '') {
            setErr('Please select state !');
            setTimeout(() => { setErr('') }, 3000)
        }
        else {
            if (values.city == '') {
                setErr('Please select city !');
                setTimeout(() => { setErr('') }, 3000)
            } else {
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                    location.reload()
                }, 3000)
                console.log(values);
                dispatch(addNewStudent(values))
            }
        }
    }

    const editDetails = (e) => {
        e.preventDefault();

        if (values.state == '') {
            setErr('Please select state !');
            setTimeout(() => { setErr('') }, 3000)
        }
        else {
            if (values.city == '') {
                setErr('Please select city !');
                setTimeout(() => { setErr('') }, 3000)
            } else {
                 setEditAlert(true)
                setTimeout(()=>{
                    setEditAlert(false)
                    location.reload()
                },3000)
                dispatch(editStudentDetails(values, data.id))
            }
        }
    }

    useEffect(() => {
        if (data !== undefined) {
            setValues(data)
            setBtnView(false)
        }
    }, [])
    return (
        <>

            <div className="container mt-1 mb-5 ">
                <form onSubmit={handleSubmit} id='form'>
                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Basic Details</b></div>
                    <div className="container border p-3">

                        <div className="row g-3 first">

                            <div className="col-md-3">
                                <label >First Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.firstName}
                                    onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Last Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.lastName}
                                    onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Roll Number</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.roll}
                                    onChange={(e) => setValues({ ...values, roll: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Class </label>
                                <select className="form-select ps-2 p-0"
                                    value={values.class}
                                    onChange={(e) => setValues({ ...values, class: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'1st'}>1st</option>
                                    <option value={'2nd'}>2nd</option>
                                    <option value={'3rd'}>3rd</option>
                                    <option value={'4th'}>4th</option>
                                    <option value={'5th'}>5th</option>
                                    <option value={'6th'}>6th</option>
                                    <option value={'7th'}>7th</option>
                                    <option value={'8th'}>8th</option>
                                    <option value={'9th'}>9th</option>
                                    <option value={'10th'}>10th</option>
                                    <option value={'11th'}>11th</option>
                                    <option value={'12th'}>12th</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >Section </label>
                                <select className="form-select ps-2 p-0"
                                    value={values.section}
                                    onChange={(e) => setValues({ ...values, section: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'A'}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'C'}>C</option>

                                </select>
                            </div>

                            <div className="col-md-3">
                                <label >Gender </label>
                                <select className="form-select ps-2 p-0"
                                    value={values.gender}
                                    onChange={(e) => setValues({ ...values, gender: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >Date of Birth</label>
                                <input type="date" className="form-control ps-2 p-0"
                                    value={values.dob}
                                    onChange={(e) => setValues({ ...values, dob: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Mobile Number</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.phone}
                                    onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Religion</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.religion}
                                    onChange={(e) => setValues({ ...values, religion: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'Hinduism'}>Hinduism </option>
                                    <option value={'Christianity'}>Christianity </option>
                                    <option value={'Islam'}>Islam </option>
                                    <option value={'Buddhism'}>Buddhism  </option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >Category</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.category}
                                    onChange={(e) => setValues({ ...values, category: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'GEN'}>GEN</option>
                                    <option value={'OBC'}>OBC</option>
                                    <option value={'SC'}>SC</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label >Caste</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.caste}
                                    onChange={(e) => setValues({ ...values, caste: e.target.value })}
                                    required
                                />
                            </div>


                            <div className="col-md-3">
                                <label >Admission Date</label>
                                <input type="date" className="form-control ps-2 p-0"
                                    value={values.admissionDate}
                                    onChange={(e) => setValues({ ...values, admissionDate: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Photo</label>
                                <input type="file" className="form-control ps-2 p-0" />
                            </div>

                        </div>
                    </div>

                    {/* 2 */}

                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Address Detail</b></div>
                    <div className="container border p-3 first">
                        <div>

                            <label>State</label>
                            <StateSelect
                                countryid={101}
                                onChange={(e) => { setstateid(e.id); setValues({ ...values, state: e.name }) }}
                                placeHolder="Select State" required />

                            <label>City</label>
                            <CitySelect
                                countryid={101}
                                stateid={stateid}
                                onChange={(e) => { setValues({ ...values, city: e.name }) }}
                                placeHolder="Select City" required />

                            <div className="form-floating mt-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                    value={values.address}
                                    onChange={(e) => setValues({ ...values, address: e.target.value })}
                                    required
                                ></textarea>
                                <label >Address...</label>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Parent Guardian Detail</b></div>
                    <div className="container border p-3">
                        <div className="row g-3 first">

                            <div className="col-md-3">
                                <label >Father Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.fatherName}
                                    onChange={(e) => setValues({ ...values, fatherName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Phone</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.fatherPhone}
                                    onChange={(e) => setValues({ ...values, fatherPhone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Occupation</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.fatherOcc}
                                    onChange={(e) => setValues({ ...values, fatherOcc: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'Agarbatti making'}>Agarbatti making</option>
                                    <option value={'Agriculture'}>Agriculture</option>
                                    <option value={'Beautician'}>Beautician</option>
                                    <option value={'Catering'}>Catering</option>
                                    <option value={'Private Employ'}>Private Employ</option>
                                    <option value={'Govt Employ'}>Govt Employ</option>
                                </select>
                            </div>

                        </div>
                        <div className="row g-3 first">

                            <div className="col-md-3">
                                <label >Mother Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.motherName}
                                    onChange={(e) => setValues({ ...values, motherName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Phone</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.motherPhone}
                                    onChange={(e) => setValues({ ...values, motherPhone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Occupation</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.motherOcc}
                                    onChange={(e) => setValues({ ...values, motherOcc: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'House Wife'}>House Wife</option>
                                    <option value={'Agriculture'}>Agriculture</option>
                                    <option value={'Beautician'}>Beautician</option>
                                    <option value={'Catering'}>Catering</option>
                                    <option value={'Private Employ'}>Private Employ</option>
                                    <option value={'Govt Employ'}>Govt Employ</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* 4  */}


                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Document Details</b></div>
                    <div className="container border px-4 p-2">
                        <div className="row g-3 first">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">To Upload Multiple Document Compress It In A Single File Then Upload it.</label>
                                <input type="file" className="form-control" id="inputEmail4" />
                            </div>
                            {alert &&
                                <Alert msg={'New student added successfully !'} type={'success'} />
                            }
                            {editAlert &&
                                <Alert msg={'Student Updated successfully !'} type={'success'} />
                            }
                            <div className="col-12 text-center mt-4">
                                {
                                    btnView ? <button type="submit" className="btn btn-primary">Submit</button> : <button type="button" className="btn btn-success"
                                        onClick={editDetails}
                                    >Edit</button>
                                }


                                <label className='text-danger ms-3'>{err}</label>

                            </div>

                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default StudentAdmission;