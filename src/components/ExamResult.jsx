import React from 'react'

function ExamResult() {
  return (
    <>
      <div className="container d-flex align-items-center flex-column bg-secondary-subtle rounded shadow-lg my-5 p-5" >
        <h3 className='mb-5'><b>Exam Result</b></h3>
        <form className="row  w-100">

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">State</label>

            <select className="form-select" id="inputState">
              <option >Choose...</option>
              <option value={'1'}>One</option>
              <option value={'1'}>Two</option>
              <option value={'1'}>Three</option>
            </select>

          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">First Name</label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>




        </form>
      </div>
    </>
  )
}

export default ExamResult