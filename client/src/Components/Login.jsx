import React from 'react'
import { useState } from 'react'
import {  NavLink,useNavigate} from 'react-router-dom'

const Login = () => {
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('')
  const navigate=useNavigate()
    // const handleChange=(e)=>{
    //     // e.preventDefault();
    //   let {name,value}=e.target;
    //   console.log(name,value)
    //   setUser({...user,[name]:value})  
    // }

    // const sendData=async(e)=>{
    //       e.preventDefault();
    //       const {email,password}=user;
    //     const res=await fetch('/login',{
    //       method:"POST",
    //       "Content-Type":"application/json"
    //     })
    // }
    const loginUser=async (e)=>{
          e.preventDefault();
          console.log("inside loginuser");
          const res=await fetch('/signin',{
                method:"POST",
                headers:{
                  'Content-type':'application/json'
                },body:JSON.stringify({
                  //below example is database_attribute_name:value
                  email,password
                })
          })
          const data=await res.json()
          if(res.status===401 || !data){
            window.alert("Invalid Credentials")
            console.log("Sorry,Invalid Data");
          } else{
            window.alert("login Successful...")
            console.log("logged in");
           navigate('/')
          }
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
                        <form className='register-form' id="register-form" method='POST'>
                            <div className='form-group'>
                                  <label  htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                  <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} name="email" id="name" autoComplete="off" placeholder='Enter Your Email'/>
                            </div>
                            <div className='form-group'>
                                  <label  htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                  <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} autoComplete="off" placeholder='Enter Your Password'/>
                            </div>
                            <div className='form-group form-button'>
                                  <input type="submit" name="signin" id="signin" onClick={loginUser} className='form-submit' value="Log In"/>
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