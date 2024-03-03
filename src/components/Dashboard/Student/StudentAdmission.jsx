import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNewStudent } from '../../../store/StudentDataSlice';

function StudentAdmission() {
    const [dataObj,setDataObj]=useState({});
    const dispatch=useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(addNewStudent(dataObj))

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
                                <input type="text" className="form-control ps-2 p-0"
                                onChange={(e)=>dataObj.id=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Roll Number</label>
                                <input type="text" className="form-control ps-2 p-0"  
                                onChange={(e)=>dataObj.roll=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                            <label >Class </label>
                                <select className="form-select ps-2 p-0"
                                onChange={(e)=>dataObj.clas=e.target.value}
                                >
                                    <option >select</option>
                                    <option value={'1st'}>1st</option>
                                    <option value={'12th'}>12th</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                            <label >Section </label>
                                <select className="form-select ps-2 p-0" 
                                onChange={(e)=>dataObj.section=e.target.value}
                                >
                                    <option >select</option>
                                    <option value={'A'}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'C'}>C</option>

                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >First Name</label>
                                <input type="text" className="form-control ps-2 p-0" 
                                onChange={(e)=>dataObj.name=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Last Name</label>
                                <input type="text" className="form-control ps-2 p-0"  
                                onChange={(e)=>dataObj.LastName=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                            <label >Gender </label>
                                <select className="form-select ps-2 p-0" 
                                onChange={(e)=>dataObj.gender=e.target.value}
                                >
                                    <option >select</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>FeMale</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                            <label >Date of Birth</label>
                            <input type="date" className="form-control ps-2 p-0" 
                            onChange={(e)=>dataObj.dob=e.target.value}
                            />
                            </div>
                            <div className="col-md-2">
                            <label >Category</label>
                                <select className="form-select ps-2 p-0" 
                                onChange={(e)=>dataObj.category=e.target.value}
                                >
                                    <option >select</option>
                                    <option value={'GEN'}>GEN</option>
                                    <option value={'OBC'}>OBC</option>
                                    <option value={'SC'}>SC</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label >Religion</label>
                                <input type="text" className="form-control ps-2 p-0" 
                                onChange={(e)=>dataObj.religion=e.target.value}
                                />
                            </div>
                            <div className="col-md-2">
                                <label >Caste</label>
                                <input type="text" className="form-control ps-2 p-0"
                                onChange={(e)=>dataObj.caste=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Mobile Number</label>
                                <input type="text" className="form-control ps-2 p-0"
                                onChange={(e)=>dataObj.phone=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Email</label>
                                <input type="email" className="form-control ps-2 p-0" 
                                onChange={(e)=>dataObj.email=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Admission Date</label>
                                <input type="date" className="form-control ps-2 p-0" 
                                onChange={(e)=>dataObj.admissionDate=e.target.value}
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
                    
                                 <label >State </label>
                                <select className="form-select ps-2 p-0"
                                onChange={(e)=>dataObj.clas=e.target.value}>
                                    <option >select</option>
                                    <option value={'1st'}>1st</option>
                                    <option value={'12th'}>12th</option>
                                </select>
                            </div>

                    {/* 3 */}
                    <div className='border w-100 bg-secondary-subtle p-2 px-4' ><b>Parent Guardian Detail</b></div>
                    <div className="container border p-3">
                    <div className="row g-3 first">
                            
                            <div className="col-md-3">
                                <label >Father Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                onChange={(e)=>dataObj.fName=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Father Phone</label>
                                <input type="text" className="form-control ps-2 p-0" 
                                onChange={(e)=>dataObj.fPhone=e.target.value}
                                />
                            </div>
                        </div>
                    <div className="row g-3 first">
                            
                            <div className="col-md-3">
                                <label >Mother Name</label>
                                <input type="text" className="form-control ps-2 p-0"
                                onChange={(e)=>dataObj.mName=e.target.value}
                                />
                            </div>
                            <div className="col-md-3">
                                <label >Mother Phone</label>
                                <input type="text" className="form-control ps-2 p-0" 
                                onChange={(e)=>dataObj.mPhone=e.target.value}
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
                            <div className="col-12 text-center mt-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-primary">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default StudentAdmission