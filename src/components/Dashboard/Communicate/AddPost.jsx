import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNotice } from '../../../store/NoticeBoardSlice';
import Alert from '../../Alert';

function AddPost() {
  const dispatch = useDispatch();
  const [alert,setAlert]=useState(false);
const [values,setValues] = useState({
    title:'',
    noticeDate:'',
    publishDate:'',
    notice:''
});


const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(addNotice(values));
  setAlert(true);
  setTimeout(()=>{
    setAlert(false)
    setValues({
      title:'',
      noticeDate:'',
      publishDate:'',
      notice:''
    })
  },2000)
}

  return (
    <>
    
  <div className="container  pt-2">
  { alert &&  <Alert type={'primary'} msg={'Notice Added Successfully.'}/> }
    <div className="row d-flex justify-content-center">
      <div className="col-md-12 col-lg-10 col-xl-8">
        <form onSubmit={handleSubmit}>
      <div className="card">       
          <div className="card-footer py-3 border-0 shadow-lg" style={{backgroundColor:'#eee'}}>
          <div className="form-outline w-100">
              <label className="form-label fs-6" >Title</label>
                <input type='text' className="form-control" style={{background:'#fff'}}
                value={values.title}
                onChange={(e)=>setValues({...values,title:e.target.value})}
                required
                />
              </div>
          <div className="form-outline w-100">
              <label className="form-label fs-6 mt-1" >Notice Date</label>
                <input type='date' className="form-control" style={{background:'#fff'}}
                value={values.noticeDate}
                onChange={(e)=>setValues({...values,noticeDate:e.target.value})}
                required
                />
              </div>
          <div className="form-outline w-100">
              <label className="form-label fs-6 mt-1" >Publish On</label>
                <input type='date' className="form-control" style={{background:'#fff'}}
                value={values.publishDate}
                onChange={(e)=>setValues({...values,publishDate:e.target.value})}
                required
                />
              </div>
            <div className="d-flex mt-5 flex-start w-100">
              <img className="rounded-circle shadow-1-strong me-3"
                src={"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"} alt="avatar" width="40"
                height="40" />
             
              <div className="form-outline w-100">
                <textarea className="form-control"  rows="4" style={{background:'#fff'}}
                value={values.notice}
                onChange={(e)=>setValues({...values,notice:e.target.value})}
                required
                />
                <label className="form-label" >Message</label>
              </div>
            </div>
            <div className="float-end mt-2 pt-1">
              <button type="submit" className="btn btn-primary btn-sm"> Post comment </button>
             
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>

    </>
  )
}

export default AddPost