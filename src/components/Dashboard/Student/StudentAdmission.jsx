import React from 'react'

function StudentAdmission() {

    const handleSubmit = () => {

    }
    return (
        <>
            <div className="container my-5 ">
                <form onSubmit={handleSubmit}>
                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Basic Details</b></div>
                    <div className="container border p-3">

                        <div className="row g-3 first">
                            
                            <div className="col-md-3">
                                <label >Admission No</label>
                                <input type="text" className="form-control ps-2 p-0"/>
                            </div>
                            <div className="col-md-3">
                                <label >Roll Number</label>
                                <input type="text" className="form-control ps-2 p-0"  />
                            </div>
                            <div className="col-md-3">
                            <label >Class </label>
                                <select className="form-select ps-2 p-0">
                                    <option >select</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                            <label >Section </label>
                                <select className="form-select ps-2 p-0" >
                                    <option >select</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>

                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >First Name</label>
                                <input type="text" className="form-control ps-2 p-0"  />
                            </div>
                            <div className="col-md-3">
                                <label >Last Name</label>
                                <input type="text" className="form-control ps-2 p-0"  />
                            </div>
                            <div className="col-md-3">
                            <label >Gender </label>
                                <select className="form-select ps-2 p-0" >
                                    <option >select</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                            <label >Date of Birth</label>
                            <input type="date" className="form-control ps-2 p-0" />
                            </div>
                            <div className="col-md-2">
                            <label >Category</label>
                                <select className="form-select ps-2 p-0" >
                                    <option >select</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label >Religion</label>
                                <input type="text" className="form-control ps-2 p-0" />
                            </div>
                            <div className="col-md-2">
                                <label >Caste</label>
                                <input type="text" className="form-control ps-2 p-0" />
                            </div>
                            <div className="col-md-3">
                                <label >Mobile Number</label>
                                <input type="text" className="form-control ps-2 p-0" />
                            </div>
                            <div className="col-md-3">
                                <label >Email</label>
                                <input type="email" className="form-control ps-2 p-0" />
                            </div>
                            <div className="col-md-3">
                                <label >Admission Date</label>
                                <input type="date" className="form-control ps-2 p-0" />
                            </div>
                            <div className="col-md-3">
                                <label >Photo</label>
                                <input type="file" className="form-control ps-2 p-0" />
                            </div>
                           
                           

                        </div>
                    </div>

                    {/* 2 */}

                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Parent Guardian Detail</b></div>
                    <div className="container border p-3">
                    <div className="row g-3 first">
                            
                            <div className="col-md-3">
                                <label >Father Name</label>
                                <input type="text" className="form-control ps-2 p-0"/>
                            </div>
                            <div className="col-md-3">
                                <label >Father Phone</label>
                                <input type="text" className="form-control ps-2 p-0"  />
                            </div>
                        </div>
                    <div className="row g-3 first">
                            
                            <div className="col-md-3">
                                <label >Mother Name</label>
                                <input type="text" className="form-control ps-2 p-0"/>
                            </div>
                            <div className="col-md-3">
                                <label >Mother Phone</label>
                                <input type="text" className="form-control ps-2 p-0"  />
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

export default StudentAdmission