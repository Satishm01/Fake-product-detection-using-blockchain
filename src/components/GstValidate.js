import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './app.css';

const GstValidate = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

    const navigate=useNavigate()


    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{username,password})
    .then(result =>{
        console.log(result)
        if(result.data  === "success"){
            navigate('/createcontract')
        }
        else {
          // Handle authentication failure
          alert("Authentication failed. Please check your username and password.");
      }
    })
        .catch(err=>console.log(err))
    }
    
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div style={{ backgroundColor: "#ccc", padding: "20px", borderRadius: "8px", width: "300px" }}>
        <h2 style={{ textAlign: "center", color: "purple" }}>Login</h2>

        <form onSubmit={handleSubmit}>

            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="username" style={{ color: "black" }}>
                    <strong>Username:</strong>
                </label>
                <input
                    type="text"
                    placeholder="Enter username"
                    autoComplete="off"
                    name="username"
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #aaa" }}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="password" style={{ color: "black" }}>
                    <strong>Password:</strong>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    name="password"
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #aaa" }}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "purple",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                Login
            </button>

        </form>

      <p style={{ textAlign: "center", color: "purple" }}>Don't have an account register in below link </p>
       <Link to="/Signup2"className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
        Register
       </Link>

       
       </div>
    </div>
  );
}

export default GstValidate;
