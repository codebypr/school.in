import axios from 'axios';
import React, { useState } from 'react'
import Alert from '../../Alert';
import { useDispatch } from 'react-redux';
import { setState } from '../../../store/UpdateStateSlice';

function AddExpenses() {
    const dispatch=useDispatch();
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState({
        type: '',
        name: '',
        invoiceNumber: '',
        date: '',
        amount: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/sendexpense', values)
            .then(()=> {
                setSuccess(true);
                setTimeout(() => {
                    dispatch(setState())
                    setSuccess(false)
                    setValues({
                        type: '',
                        name: '',
                        invoiceNumber: '',
                        date: '',
                        amount: '',
                        description: ''
                    })
                }, 2000)
            })
            .catch(err => console.log(err))

    }
    return (
        <>
       
            {success &&
                <Alert type={'success'} msg={'Expense Added'} />
            }
            <div className="container mt-1 mb-5  p-0 shadow-lg">
                <form onSubmit={handleSubmit} id='form'>
                    <div className='border w-100 bg-secondary-subtle p-1 px-4' ><b>Add Expense</b></div>
                    <div className="container border p-3">
                        <div className="row g-2 first">

                            <div >
                                <label >Expense Head</label>
                                <select className="form-select ps-2 p-0"
                                    value={values.type}
                                    onChange={(e) => setValues({ ...values, type: e.target.value })}
                                    required >
                                    <option value={''}>select</option>
                                    <option value={'Stationery Purchase'}>Stationery Purchase</option>
                                    <option value={'Electricity Bill'}>Electricity Bill</option>
                                    <option value={'Telephone Bill'}>Telephone Bill</option>
                                    <option value={'Micellaneous'}>Micellaneous</option>
                                    <option value={'Other'}>Other</option>

                                </select>
                            </div>

                            <div >
                                <label >Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                    value={values.name}
                                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                                    required />
                            </div>
                            <div >
                                <label >Invoice Number</label>
                                <input type="number" className="form-control ps-2 p-0"
                                    value={values.invoiceNumber}
                                    onChange={(e) => setValues({ ...values, invoiceNumber: e.target.value })}
                                    required />
                            </div>
                            <div >
                                <label >Date</label>
                                <input type="date" className="form-control ps-2 p-0"
                                    value={values.date}
                                    onChange={(e) => setValues({ ...values, date: e.target.value })}
                                    required />
                            </div>
                            <div >
                                <label >Amount ($)</label>
                                <input type="number" className="form-control ps-2 p-0"
                                    value={values.amount}
                                    onChange={(e) => setValues({ ...values, amount: e.target.value })}
                                    required />
                            </div>
                            <div >
                                <label >Description</label>
                                <textarea type="text" className="form-control ps-2 p-0"
                                    value={values.description}
                                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                                    required />
                            </div>

                            <div className='text-end mt-3'>
                                <button type='submit' className="btn btn-sm btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddExpenses