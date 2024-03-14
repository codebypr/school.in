import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function LoginForm() {
  axios.defaults.withCredentials=true;

  const [loginInfo,setLoginInfo] = useState({
    email:'',
    password:'',
    checkBox:''
  })
  const [msg, setMsg] = useState();
  const navigate = useNavigate();



  const studentLogin=(value) => {
      axios.post('http://localhost:3000/studentlogin',value)
      .then(res=>{
        if (res.data.Status=='success') {
          navigate('/dashboard')
        }else  setMsg(res.data.Message)       
      })
      .catch(err=>console.log('Err',err))     
  }

  const teacherLogin=(value) => {
      axios.post('http://localhost:3000/teacherlogin',value)
      .then(res=>{
        if (res.data.Status=='success') {
          navigate('/dashboard')
        }else  setMsg(res.data.Message)       
      })
      .catch(err=>console.log('Err',err))     
  }

  const loginTeacher = async (e) => {
    e.preventDefault();
    setMsg('loding...')
   if(loginInfo.checkBox=='student'){
    studentLogin(loginInfo) 
   }
   if(loginInfo.checkBox=='teacher'){
    teacherLogin(loginInfo) 
   }
    // 
  }


  return (
    <>
   
      <section className="container-fluid  py-5" style={{ backgroundColor: '#9A616D' }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center " >
            <div className="col col-xl-10" >
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0 " >
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={loginTeacher}>

                        <div className="d-flex align-items-center mb-3 pb-1">

                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <label>Email</label>
                          <input type="email" id="form2Example17" className="form-control form-control-lg" required
                            value={loginInfo.email}
                            onChange={(e) => setLoginInfo({...loginInfo, email:e.target.value})}

                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label >Password</label>
                          <input type="password" id="form2Example27" className="form-control orm-control-lg" required
                            value={loginInfo.password}
                            onChange={(e) => setLoginInfo({...loginInfo,password:e.target.value})}
                          />                          
                        </div>

                        <div className="form-outline mb-4">
                
                          <div>
                            <input className="form-check-input " type="radio" name={'checkBox'}  value="student" id='checkBox1' required 
                            onChange={(e) => setLoginInfo({...loginInfo,checkBox:e.target.value})}
                            />
                            <label className="form-check-label me-2 ms-1" htmlFor='checkBox1'>STUDENT</label>

                            
                            <input className="form-check-input ms-5"  type="radio" name={'checkBox'}  value="teacher" id='checkBox2' 
                            onChange={(e) => setLoginInfo({...loginInfo,checkBox:e.target.value})}
                            />
                            <label className="form-check-label me-2 ms-1" htmlFor='checkBox2'>STAFF</label>

                          </div>                         
                        </div>

                        <div className="pt-1 mb-4 d-flex justify-content-between">
                          <button type="submit" className="btn btn-success btn-lg btn-block">Login here</button>
                          <p className='text-danger fs-6'>{msg}</p>
                        </div>

                        <NavLink className="small text-muted" href="#">Forgot password?</NavLink>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginForm