import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState({
      email:"",password:""
    })

    const handleChange=(e)=>{
        // e.preventDefault();
      let {name,value}=e.target;
      console.log(name,value)
      setUser({...user,[name]:value})
    }

    const sendData=async(e)=>{
          e.preventDefault();
          const {email,password}=user;
        const res=await fetch('/login',{
          method:"POST",
          "Content-type":"Application/json"
        })
    }
  return (
      <>
         <section className='sign-in'>
            <div className='container mt-5'>
                <div className='signin-content'>
                          <div className='signin-image'>
                                  <figure>
                                      {/* <img src={loginpic}alt="login pic" /> */}  
                                      <NavLink to="/signup"  className="signup-image-link">New User?Create an Account</NavLink>
                                  </figure>
                          </div>
                      <div className='signin-form'>
                        <h2 className='form-title'>Login</h2>
                        <form className='register-form' id="register-form">
                            <div className='form-group'>
                                  <label  htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                  <input type="email" value={user.email} onChange={handleChange} name="email" id="name" autoComplete="off" placeholder='Enter Your Email'/>
                            </div>
                            <div className='form-group'>
                                  <label  htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                  <input type="password" name="password" id="password" value={user.password} onChange={handleChange} autoComplete="off" placeholder='Enter Your Password'/>
                            </div>
                            <div className='form-group form-button'>
                                  <input type="submit" name="signin" id="signin" onSubmit={sendData} className='form-submit' value="Log In"/>
                            </div>
                    </form>
                  </div>
                </div>
            </div>
      </section>
      </>
  )
}

export default Login