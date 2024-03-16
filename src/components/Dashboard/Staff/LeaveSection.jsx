import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdSmsFailed,MdOutlineDoneAll  } from "react-icons/md";
import Alert from '../../Alert';

function LeaveSection({id,userType,userName}) {
  const [leaveData,setLeaveData] = useState([]);
  const [alert,setAlert] = useState(false);
    const [values, setValues] = useState({
        from: '',
        to: '',
        message:'',
        uName:userName,
        uType:userType,
        uId:id,
        permission:3,
      });


      const handleSubmit = (e)=>{
        e.preventDefault();
       
       axios.post('http://localhost:3000/sendleave',values)
       .then(()=>{
        setAlert(true)
        setTimeout(()=>{
          setValues({
            from: '',
          to: '',
          message:'',         
          })
          setAlert(false)
        },2000)
        
       })
       .catch((err)=>console.log(err))
      }

      

    useEffect(()=>{
        ;(async()=>{
            const result = await axios.get('http://localhost:3000/readsingleleave/'+id)
            setLeaveData(result.data)
        })()
    },[])
  return (
    <>
   <div className="container pt-5 d-flex justify-content-center">
   <div className="container px-5 mx-5">
   {alert && <Alert type={'primary'} msg={'Your Leave has been Sended to Admin.'}/>}
            <form onSubmit={handleSubmit}>
              <div className="card">
                <div className="card-footer py-3 border-0 shadow-lg" style={{ backgroundColor: '#eee' }}>
                 
                  <div className="form-outline w-100">
                    <label className="form-label fs-5 mt-1 " >From</label>
                    <input type='date' className="form-control" style={{ background: '#fff' }}
                      value={values.from}
                      onChange={(e) => setValues({ ...values, from: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-outline w-100">
                    <label className="form-label fs-5 mt-1" >To</label>
                    <input type='date' className="form-control" style={{ background: '#fff' }}
                      value={values.to}
                      onChange={(e) => setValues({ ...values, to: e.target.value })}
                      required
                    />
                  </div>
                  <div className="d-flex mt-5 flex-start w-100">
                    <img className="rounded-circle shadow-1-strong me-3"
                      src={"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"} alt="avatar" width="40"
                      height="40" />

                    <div className="form-outline w-100">
                      <textarea className="form-control" rows="4" style={{ background: '#fff' }}
                        value={values.message} placeholder='write reason....'
                        onChange={(e) => setValues({ ...values, message: e.target.value })}
                        required
                      />
                      
                    </div>
                  </div>

                  <div className="float-end mt-2 pt-1">
                    <button type="submit" className="btn btn-primary btn-sm"> Send </button>

                  </div>
                </div>


                <table className="table ">
            <thead className='table-secondary text-center'>
                <tr >
                <th>From</th>
                <th>To</th>
                <th>Reason</th>
                <th>Permission</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                { leaveData.length!==0 ?
                    leaveData.map((data,i)=>(
                        <tr key={i} >  
                              <td>{data.fromDate}</td>  
                              <td>{data.toDate}</td>  
                              <td>{data.message}</td>  
                              <td>
                                
                              {data.permission==true &&
                              (<label className='bg-success rounded p-1 px-2'>Accepted
                              <MdOutlineDoneAll className='ms-1'/>
                              </label>) }
                               {data.permission=='3' &&
                              (<label className='bg-warning rounded p-1 px-2 text-black' >Pending
                              <MdSmsFailed className='ms-2'/>
                              </label>)}
                               {data.permission==false &&
                              (<label className='bg-danger rounded p-1 px-2 text-white' >Rejected
                              <MdSmsFailed className='ms-2'/>
                              </label>)}
                              </td>   
                        </tr>
                    ))  :
                   (<tr key={'trow'}><td colspan="7" className='text-center' >No Data Found</td></tr>)
                }
            </tbody>
        </table>
              </div>
            </form>
            </div>
   </div>
    </>
  )
}

export default LeaveSection