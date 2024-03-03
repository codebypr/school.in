import React from 'react'

function StudentFeesCollect({data}) {
  return (
    <>
            <form >
            <div className="row">
                <label  className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10 mb-2">
                <label className="form-control" >{data.name}</label>
                </div>
            </div>
            <div className="row">
                <label  className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-10 mb-2">
                <input type="date" className="form-control" />
                </div>

                <label  className="col-sm-2 col-form-label">Amount</label>
                <div className="col-sm-10">
                <div className="input-group">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" placeholder='Enter amount'/>
                <span className="input-group-text">.00</span>
                </div>
            </div>
            </div>

        <div className="row mb-3">
            <div className="row">
                <div className="col input-group-sm">
                <label  className="col-sm-2 col-form-label">Discount</label>
                <input type="email" className="form-control" />
                </div>
                <div className="col input-group-sm">
                 <label className="col-sm-2 col-form-label">Fine</label>
                  <input type="email" className="form-control"/>
                </div>
            </div>
    
    </div>
            <label >Payment Mode </label>
            <div className="form-check form-check-inline ms-5">
                <input className="form-check-input " type="radio" name="a" value="option1"/>
                <label className="form-check-label" >Cash</label>
            </div>
             <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="a" value="option2"/>
                <label className="form-check-label" >Card</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="a" value="option3" />
                <label className="form-check-label" >UPI</label>
            </div>
            

            </form>
    </>
  )
}

export default StudentFeesCollect
