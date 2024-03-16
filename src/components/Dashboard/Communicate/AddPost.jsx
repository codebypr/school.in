import React, { useEffect, useState } from 'react'
import Alert from '../../Alert';
import axios from 'axios';

function AddPost() {
  const [alert, setAlert] = useState(false);
  const [err, setErr] = useState(false);
  const [values, setValues] = useState({
    title: '',
    noticeDate: '',
    publishDate: '',
    notice: '',
    messageTo:''
  });
  const [checkboxValues, setCheckboxValues] = useState({
    Student: false,
    Teacher: false,
    Receptionest: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({ ...checkboxValues, [name]: checked });
  };

  const getSelectedCheckboxValues = () => {
    let selectedCheckboxes = [];
    for (let checkbox in checkboxValues) {
      if (checkboxValues[checkbox]) {
        selectedCheckboxes.push(checkbox);
      }
    }
    setValues({...values,messageTo:selectedCheckboxes.join(', ')});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.messageTo=='') {
      setErr(true)
    }else{
      setErr(false)
    axios.post('http://localhost:3000/sendnotice',values)
    .then(()=>setAlert(true))
    .catch(err=>console.log(err))
   
    setTimeout(() => {
      setAlert(false)
      setValues({
        title: '',
        noticeDate: '',
        publishDate: '',
        notice: '',
        messageTo:''
      })
      
    }, 2000)
  }
  }

  useEffect(()=>{
    getSelectedCheckboxValues();
  },[checkboxValues])

  return (
    <>

      <div className="container pt-2">
        {alert && <Alert type={'primary'} msg={'Notice Added Successfully.'} />}

        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-footer py-3 border-0 shadow-lg" style={{ backgroundColor: '#eee' }}>
                  <div className="form-outline w-100">
                    <label className="form-label fs-6" >Title</label>
                    <input type='text' className="form-control" style={{ background: '#fff' }}
                      value={values.title}
                      onChange={(e) => setValues({ ...values, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-outline w-100">
                    <label className="form-label fs-6 mt-1" >Notice Date</label>
                    <input type='date' className="form-control" style={{ background: '#fff' }}
                      value={values.noticeDate}
                      onChange={(e) => setValues({ ...values, noticeDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-outline w-100">
                    <label className="form-label fs-6 mt-1" >Publish On</label>
                    <input type='date' className="form-control" style={{ background: '#fff' }}
                      value={values.publishDate}
                      onChange={(e) => setValues({ ...values, publishDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="d-flex mt-5 flex-start w-100">
                    <img className="rounded-circle shadow-1-strong me-3"
                      src={"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"} alt="avatar" width="40"
                      height="40" />

                    <div className="form-outline w-100">
                      <textarea className="form-control" rows="4" style={{ background: '#fff' }}
                        value={values.notice}
                        onChange={(e) => setValues({ ...values, notice: e.target.value })}
                        required
                      />
                      <label className="form-label" >Notice</label>
                    </div>
                  </div>

                  <div className="float-end mt-2 pt-1">
                    <button type="submit" className="btn btn-primary btn-sm"> Post comment </button>

                  </div>
                </div>
              </div>

            </div>
            <div className="form-outline col-lg-4">
              <label className="form-label" >Message To</label>
              <div>
                <div>
                <label>
        <input
          type="checkbox" className='me-2' name="Student"
          checked={checkboxValues.checkbox1}
          onChange={handleCheckboxChange}
        />
        Student
      </label>
      <br />
      <label>
        <input
          type="checkbox" className='me-2' name="Teacher"
          checked={checkboxValues.checkbox2}
          onChange={handleCheckboxChange}
        />
        Teacher
      </label>
      <br />
      <label>
        <input
          type="checkbox" className='me-2' name="Receptionist"
          checked={checkboxValues.checkbox3}
          onChange={handleCheckboxChange}
        />
        Receptionest
      </label>
      <br />
     {
      err &&  <b className='text-danger '>Please select fild where you send Notice!</b>
     }

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default AddPost