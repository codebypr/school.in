import React, { useEffect, useState } from 'react'
import { CitySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import Alert from '../../Alert';
import axios from 'axios';


function AddNewStaff({ data }) {

    const [alert, setAlert] = useState(false);
    const [editAlert, setEditAlert] = useState(false);
    const [btnView, setBtnView] = useState(true);
    const [err, setErr] = useState('');
    const [stateid, setstateid] = useState(0);
    const [values, setValues] = useState({
        role: '',
        firstName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        email: '',
        gender: '',
        dob: '',
        doj: '',
        phone: '',
        status: '',
        state: '',
        city: '',
        address: '',
        qualification: '',
        experience: '',
        password: '',
    });


    const createPassword=()=>{
        let pass=''
        let str='abcdefghijklmnopqrstuvwxyz1234567890'
        let length='8'
        for (let i = 0; i < length; i++) {
          pass+=str[ Math.floor(Math.random()*str.length)];            
        }
        setValues({...values,password:pass});
        setAlert(true)
}

const confirm = () =>{
    setAlert(false)
    axios.post('http://localhost:3000/sendteacherinfo',values)
                 .then(()=>console.log('done'))
                 .catch(err=>console.log("new Teacher not added ! "+err))
    setTimeout(()=>{              
     setValues({
        role: '',
        firstName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        email: '',
        gender: '',
        dob: '',
        doj: '',
        phone: '',
        status: '',
        state: '',
        city: '',
        address: '',
        qualification: '',
        experience: '',        
                })
        },2000)
   
}

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
                createPassword();
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
                ; (async () => {
                    axios.put('http://localhost:3000/editteacherinfo/' + data.id, values)
                    setEditAlert(true)
                })()

                setTimeout(() => {
                    setEditAlert(false)
                    setValues({
                        role: '',
                        firstName: '',
                        lastName: '',
                        fatherName: '',
                        motherName: '',
                        email: '',
                        gender: '',
                        dob: '',
                        doj: '',
                        phone: '',
                        status: '',
                        state: '',
                        city: '',
                        address: '',
                        qualification: '',
                        experience: '',
                    })
                }, 3000)
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
                                <label >Role</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.role}
                                    onChange={(e) => setValues({ ...values, role: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'Admin'}>Admin</option>
                                    <option value={'Teacher'}>Teacher</option>
                                    <option value={'Accountant'}>Accountant</option>
                                    <option value={'Receptionist'}>Receptionist</option>

                                </select>
                            </div>
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
                                <label >Father Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.fatherName}
                                    onChange={(e) => setValues({ ...values, fatherName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Mothere Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.motherName}
                                    onChange={(e) => setValues({ ...values, motherName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Email</label>
                                <input type="email" className="form-control ps-2 p-0"
                                    value={values.email}
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    required
                                />
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
                                <label >Date of joining</label>
                                <input type="date" className="form-control ps-2 p-0"
                                    value={values.doj}
                                    onChange={(e) => setValues({ ...values, doj: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="col-md-3">
                                <label >Mobile Number</label>
                                <input type="number" className="form-control ps-2 p-0"
                                    value={values.phone}
                                    onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Maried Status</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.status}
                                    onChange={(e) => setValues({ ...values, status: e.target.value })}
                                    required
                                >
                                    <option value={''}>select</option>
                                    <option value={'Married'}>Married</option>
                                    <option value={'UnMarried'}>UnMarried</option>

                                </select>
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
                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Qualification & Work Experience</b></div>
                    <div className="container border p-3">
                        <div className="row g-3 first">

                            <div className="col-md-3">
                                <label >Qualification</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.qualification}
                                    onChange={(e) => setValues({ ...values, qualification: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Work Experience</label>
                                <input type="number" className="form-control ps-2 p-0"
                                    value={values.experience}
                                    onChange={(e) => setValues({ ...values, experience: e.target.value })}
                                    required
                                />
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
                            {   alert &&
                                <div className='text-center'>
                                <Alert msg={` Your Login Password is ${values.password}. Please confirm if You are added.`} type={'success'} />
                                <button className='btn btn-primary btn-sm mt-0' style={{width:'100px'}}
                                onClick={confirm}
                                >Confirm</button>
                                </div>
                            }
                            {editAlert &&
                                <Alert msg={'Teacher Updated successfully !'} type={'success'} />
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

export default AddNewStaff