import axios from 'axios';
import React, { useState } from 'react'

function StudentFeesCollect({ data }) {
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState({
        studentId: '',
        name: '',
        date: '',
        amount: '',
        discount: '',
        fine: '',
        mode: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        const ele = document.getElementsByName('a');
        ele.forEach((input) => {
            if (input.checked) {
                values.mode = input.value;
                values.name = data.firstName;
                values.studentId = data.id;
                axios.post('http://localhost:3000/sendfees', values)
                    .then(res => { setSuccess(true); setErr(false) })
                    .catch(err => { console.log(err); })
            }
            else {
                setErr(true)
            }
        })


    }

    const reset = () => {
        setValues({
            studentId: '',
            name: '',
            date: '',
            amount: '',
            discount: '',
            fine: '',
            mode: ''
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10 mb-2">
                            <label className="form-control" >{data.firstName}</label>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 col-form-label">Date</label>
                        <div className="col-sm-10 mb-2">
                            <input type="date" className="form-control"
                                value={values.date}
                                onChange={e => setValues({ ...values, date: e.target.value })}
                                required
                            />
                        </div>

                        <label className="col-sm-2 col-form-label">Amount</label>
                        <div className="col-sm-10">
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input type="number" className="form-control" placeholder='Enter amount'
                                    value={values.amount}
                                    onChange={e => setValues({ ...values, amount: e.target.value })}
                                    required
                                />
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="row">
                            <div className="col input-group-sm">
                                <label className="col-sm-2 col-form-label">Discount</label>
                                <input type="number" className="form-control"
                                    value={values.discount}
                                    onChange={e => setValues({ ...values, discount: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col input-group-sm">
                                <label className="col-sm-2 col-form-label">Fine</label>
                                <input type="number" className="form-control"
                                    value={values.fine}
                                    onChange={e => setValues({ ...values, fine: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                    </div>
                    <label >Payment Mode </label>
                    <div className="form-check form-check-inline ms-5">
                        <input className="form-check-input " type="radio" name="a" value="Cash" />
                        <label className="form-check-label" >Cash</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="a" value="Card" />
                        <label className="form-check-label" >Card</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="a" value="UPI" />
                        <label className="form-check-label" >UPI </label>
                        {
                            err && <label className="ms-2 text-danger fs-6" > select mode!</label>
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    {
                        success && <label className="ms-2 text-success me-5 fs-6" > Fees Submited Successfully.</label>
                    }
                    <button type="reset" onClick={reset} className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                    <button type="submit" className="btn btn-primary">Collect Fees</button>
                </div>
            </form>
        </>
    )
}

export default StudentFeesCollect
