import React from 'react'
import '../Custom_Css/login.css'

function LoginForm() {
  return (
   <>
      <div className="loginbody pb-5 ">
      <div className="login " >
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input type="text" id="username"  name="username" defaultValue="username"             className="text_input " style={{outline:'none'}}/>
          </div>
          <div className="text_area">
            <input type="password" id="password" name="password" defaultValue="password"
              className="text_input" style={{outline:'none'}}/>
          </div>
          <input type="submit" value="LOGIN" className="loginbtn" />
        </form>
        {/* <a className="link" href="/signup">Sign Up</a> */}
      </div>
      </div>
   </>
  )
}

export default LoginForm