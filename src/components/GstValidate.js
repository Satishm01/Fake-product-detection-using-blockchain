import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const GstValidate = () => {
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate()


    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{username,password})
    .then(result =>{
        console.log(result)
        if(result.data  === "success"){
            navigate('/createcontract')
        }
    })
        .catch(err=>console.log(err))
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className="bg-white p-3 rounded w-25">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

         <div className="mb-3">
          <label htmlFor="username">
            <strong>username</strong>
          </label>
        
        <input 
        type="text"
        placeholder="Enter username"
        autoComplete="off"
        name="username"
        className="form-control rounded-0"
        onChange={(e)=>setusername(e.target.value)}
         />
         </div>
         <div className="mb-3">
          <label htmlFor="Password">
            <strong>Password</strong>
          </label>
        
        <input 
        type="password"
        placeholder="Enter Password"
        autoComplete="off"
        name="password"
        className="form-control rounded-0"
        onChange={(e)=>setpassword(e.target.value)}
         />
         </div>

         
        <button  type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        
        </form>

      <p>Already have an account</p>
       <Link to="/Signup2"className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
        Register
       </Link>

       
       </div>
    </div>
  );
}

export default GstValidate;
