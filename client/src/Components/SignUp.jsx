import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const  navigate=useNavigate()
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })
  // let name,value;
  const handleChange=(e)=>{
    console.log(e)
        let {name,value}=e.target
        //  name=e.target.name;
        //  value=e.target.value;
           setUser({...user,[name]:value})

  }

  const sendData=async (e)=>{
       e.preventDefault()
       alert("enter in send data")
       const {name,email,phone,work,password,cpassword}=user;
       const res=await fetch("/register",{
         method:"POST",
         headers:{
           "Content-type":"application/json"
         },
         body:JSON.stringify({
          name,email,phone,work,password,cpassword
         })
       }) 
       const response=await res.json();
       alert("processing...")
       if(response.status=== 400 || !response ){
              window.alert("Sorry,Invalid Data");
             console.log("Sorry,Invalid Data");
       }else{
        window.alert("Registration Successful");
        console.log("Successful");
        navigate('/login')
       }
          
  }
  return (
    <>
      <section className='signup'>
            <div className='container mt-5'>
              <div className='signup-content'>
                    <div className='signup-form'>
                      <h2 className='form-title'>SignUp</h2>
                      <form className='register-form' id="register-form" method="POST">
                            <div className='form-group'>
                                <label  htmlFor="name"><i className="zmdi zmdi-account material-icon-name"></i></label>
                                <input type="text" name="name" id="name" value={user.name} onChange={handleChange} autoComplete="off" placeholder='Enter Your Name'/>
                            </div>
                            <div className='form-group'>
                                <label  htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" value={user.email} onChange={handleChange} autoComplete="off" placeholder='Enter Your Email'/>
                            </div>
                            <div className='form-group'>
                                <label  htmlFor="phone"><i className="zmdi zmdi-phone-in-talk"></i></label>
                                <input type="number" name="phone" value={user.phone} id="phone" onChange={handleChange} autoComplete="off" placeholder='Enter Your Contact No.'/>
                            </div>
                            <div className='form-group'>
                                <label  htmlFor="work"><i className="zmdi zmdi-slideshow"></i></label>
                                <input type="text" name="work" id="work" value={user.work} onChange={handleChange} autoComplete="off" placeholder='Are You Working ?'/>
                            </div>
                            <div className='form-group'>
                                <label  htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" value={user.password} onChange={handleChange} id="password" autoComplete="off" placeholder='Enter Your Password'/>
                            </div>
                            <div className='form-group'>
                                <label  htmlFor="cpassword"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleChange} autoComplete="off" placeholder='Enter Confirm Password'/>
                            </div>
                           <div className='form-group form-button'>
                              <input type="submit" name="signup" id="signup" onClick={sendData} className='form-submit'/>
                           </div>
                            
                            

                      </form>
                      </div>
                      <div className='signup-image'>
                                <figure>
                                    {/* <img src={signpic}alt="registration pic" /> */}  
                                    <NavLink to="/login" className="signup-image-link">Already Registered ?</NavLink>
                                </figure>
                              

                            </div>
                    
              </div>
            </div>
      </section>
    </>
  )
}

export default SignUp