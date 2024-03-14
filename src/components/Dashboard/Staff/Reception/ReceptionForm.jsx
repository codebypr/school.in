import axios from 'axios';
import React, { useState } from 'react'
import Alert from '../../../Alert';

function ReceptionForm() {
    const [alert, setAlert] = useState(false);
    const [values, setValues] = useState({
        name: '',
        purpose: '',
        email: '',
        phone: '',
        date: '',
        address: '',
        message: ''
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
       
        axios.post('http://localhost:3000/sendreceptionentry',values)
        .then(res=>setAlert(true))
        .catch(err=>console.log(err))
        setTimeout(()=>{
            setAlert(false)
            setValues({
                name: '',
                purpose: '',
                email: '',
                phone: '',
                date: '',
                address: '',
                message: '' 
            })
        },2000)
    }
    return (
        <>
            <div className="container shadow-lg px-0">
                <h1 className="text-center mt-5 text-dark bg-secondary py-2">Reception Entry Application Form</h1>
                <form className='my-2 p-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="student_name" className="form-label">Student's Name</label>
                        <input type="text" className="form-control" id="student_name" 
                        required
                        value={values.name}
                        onChange={(e)=>setValues({...values,name:e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="parent_name" className="form-label">What's Your Purpose</label>
                        <select className="form-select "
                            value={values.purpose}
                            onChange={(e) => setValues({ ...values, purpose: e.target.value })}
                            required
                        >
                            <option value={''}>select</option>
                            <option value={'Enquiry'}>Enquiry</option>
                            <option value={'Admission'}>Admission</option>
                            <option value={'PTM'}>PTM</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" 
                        required
                        value={values.email}
                        onChange={(e)=>setValues({...values,email:e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" 
                        required
                        value={values.phone}
                        onChange={(e)=>setValues({...values,phone:e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date</label>
                        <input type="date" className="form-control" id="dob" 
                        required
                        value={values.date}
                        onChange={(e)=>setValues({...values,date:e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Address</label>
                        <input type="text" className="form-control" 
                        required
                        value={values.address}
                        onChange={(e)=>setValues({...values,address:e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3"
                        required
                        value={values.message}
                        onChange={(e)=>setValues({...values,message:e.target.value})}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        {
                            alert && <Alert type={'success'} msg={'Your Entry added successfully.'}/>
                        }
                        <button type="submit" className="btn btn-success my-3">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ReceptionForm