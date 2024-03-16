import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Alert from '../../Alert';

function AssignClass() {
    const [err, setErr] = useState(false);
    const [alert, setAlert] = useState(false);
    const [valied, setInvalid] = useState(false);
    const [teacherData, setTeacherData] = useState([]);
    const [values, setValues] = useState({
        id: '',
        classIncharge: '',
        subject: ''
    });


    const [checkboxValues, setCheckboxValues] = useState({
        Student: false,
        Teacher: false,
        Receptionest: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxValues({ ...checkboxValues, [name]: checked });
    };

    const getSelectedCheckboxValues = () => {
        let selectedCheckboxes = [];
        for (let checkbox in checkboxValues) {
            if (checkboxValues[checkbox]) {
                selectedCheckboxes.push(checkbox);
            }
        }
        setValues({ ...values, subject: selectedCheckboxes.join(', ') });
    };

    useEffect(() => {
        ; (async () => {
            const result = await axios.get('http://localhost:3000/readteacherinfo')
            setTeacherData(result.data);
        })()


        getSelectedCheckboxValues();
    }, [checkboxValues, teacherData])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.subject == '') {
            setErr(true)
        } else {
            setInvalid(false)
            setErr(false)
            axios.post('http://localhost:3000/senincharge', values)
                .then((res) => {if(res.data.code=='ER_DUP_ENTRY'){
                    setInvalid(true)
                }else{
                    setAlert(true)
                    console.log(res);
                }})
                .catch((err)=>console.log(err) )
            setTimeout(() => {
                setAlert(false)
                
                setValues({
                    id: '',
                    classIncharge: '',
                    subject: ''
                })
            }, 2000)
        }
    }
    return (
        <>
        
            <div className="container d-flex align-items-center flex-column bg-secondary-subtle rounded shadow-lg my-5 p-5" >
                {
                    alert && <Alert type={'success'} msg={'Class & Subject Assign Successfully.'}/>
                }
                {
                    valied && <Alert type={'danger'} msg={'Class & Subject Assign Only 1 Time.'}/>
                }
                <h3 className='mb-5'><b>Assign Class & Subject</b></h3>
                <form className="row  w-100" onSubmit={handleSubmit}>

                    <div className="col-md-6">

                        <label >Incharge Name</label>
                        <select className="form-select ps-2 mt-2"
                            value={values.id}
                            onChange={(e) => setValues({ ...values, id: e.target.value })}
                            required
                        >       <option value={''}>select</option>
                            {
                                teacherData.map((tec) => (
                                    <option value={tec.id} key={tec.id}>{tec.firstName}</option>
                                ))
                            }

                        </select>

                        <label >Class Incharge</label>
                        <select className="form-select ps-2 mt-2"
                            value={values.classIncharge}
                            onChange={(e) => setValues({ ...values, classIncharge: e.target.value })}
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
                    <div className="col-md-6">
                        <div className="row">
                            <label className="form-label" >Select Faculty</label>
                            <div className="col">
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Hindi"
                                        checked={checkboxValues.checkbox1}
                                        onChange={handleCheckboxChange}
                                    />
                                    Hindi
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="English"
                                        checked={checkboxValues.checkbox2}
                                        onChange={handleCheckboxChange}
                                    />
                                    English
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Math"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    Math
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Science"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    Science
                                </label>
                                <br />

                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Drawing"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    Drawing
                                </label>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Social Science"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    Social Science
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Sanskrit"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    Sanskrit
                                </label>

                                <br />
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="Physical"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    Physical
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox" className='me-2' name="GK"
                                        checked={checkboxValues.checkbox3}
                                        onChange={handleCheckboxChange}
                                    />
                                    GK
                                </label>
                            </div>
                        </div>
                        {
                            err && <b className='text-danger '>Please select subject !</b>
                        }
                    </div>


                    <div className=" text-end my-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>






        </>
    )
}

export default AssignClass