import React from 'react'

function OnlineAdmission() {

    const handleSubmit = () => {

    }
    return (
        <>
            <div className="container my-5 ">
                <form onSubmit={handleSubmit}>
                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Basic Details</b></div>
                    <div className="container border px-4 p-2">

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Gender</label>
                                <select className="form-select" id="inputState">
                                    <option >Choose...</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>

                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPassword4" className="form-label">Date of Birth</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPassword4" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select className="form-select" id="inputState">
                                    <option >Choose...</option>
                                    <option value={'1'}>One</option>
                                    <option value={'1'}>Two</option>
                                    <option value={'1'}>Three</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">City</label>
                                <select className="form-select" id="inputState">
                                    <option >Choose...</option>
                                    <option value={'1'}>One</option>
                                    <option value={'1'}>Two</option>
                                    <option value={'1'}>Three</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* 2 */}

                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Parent Details</b></div>
                    <div className="container border px-4 p-2">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Father Name</label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Mother Name</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                        </div>
                    </div>

                    {/* 2 */}


                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Document Details</b></div>
                    <div className="container border px-4 p-2">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Documents (To Upload Multiple Document Compress It In A Single File Then Upload It)</label>
                                <input type="file" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12 text-center mt-4">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OnlineAdmission