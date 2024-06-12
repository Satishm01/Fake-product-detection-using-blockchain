import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [companyName, setCompanyName] = useState('');
    const [stateLocation, setStateLocation] = useState('');
    const [panNumber, setPANNumber] = useState('');
    const [numOfEntity, setNumOfEntity] = useState('');
    const [govtBodies, setGovtBodies] = useState('');
    const [gstNumber, setGSTNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const navigate=useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{companyName,stateLocation,panNumber,numOfEntity,govtBodies,gstNumber,username,password})
    .then(result =>{console.log(result)
    navigate('/GstValidate')
    })
        .catch(err=>console.log(err))
    }
    
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "8px", width: "300px" }}>
        <h2 style={{ textAlign: "center", color: "black" }}>Register</h2>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="companyName"><strong>Company Name</strong></label>
                <input 
                    type="text"
                    placeholder="Enter Company Name"
                    autoComplete="off"
                    name="companyName"
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
            </div>

  <div className="mb-3">
    <label htmlFor="stateLocation">
      <strong>State Location</strong>
    </label>
    <select 
      className="form-select rounded-0"
      onChange={(e) => setStateLocation(e.target.value)}
    >
      <option value="" >Select a state/UT</option>
      <option value="37">Andhra Pradesh (New)</option>
      <option value="28">Andhra Pradesh (Old)</option>
      <option value="35">Andaman & Nicobar Islands</option>
      <option value="12">Arunachal Pradesh</option>
      <option value="18">Assam</option>
      <option value="13">Bihar</option>
      <option value="04">Chandigarh</option>
      <option value="22">Chhattisgarh</option>
      <option value="01">Jammu & Kashmir</option>
      <option value="20">Jharkhand</option>
      <option value="29">Karnataka</option>
      <option value="32">Kerala</option>
      <option value="17">Meghalaya</option>
      <option value="23">Madhya Pradesh</option>
      <option value="27">Maharashtra</option>
      <option value="14">Manipur</option>
      <option value="15">Mizoram</option>
      <option value="07">Delhi</option>
      <option value="25">Daman & Diu</option>
      <option value="26">Dadra & Nagar Haveli</option>
      <option value="31">Lakshadweep</option>
      <option value="30">Goa</option>
      <option value="24">Gujarat</option>
      <option value="06">Haryana</option>
      <option value="20">Himachal Pradesh</option>
      <option value="09">Uttar Pradesh</option>
      <option value="03">Punjab</option>
      <option value="16">Tripura</option>
      <option value="33">Tamil Nadu</option>
      <option value="34">Puducherry</option>
      <option value="19">West Bengal</option>
      <option value="05">Uttarakhand</option>
      <option value="11">Sikkim</option>
      <option value="10">Bihar</option>
      <option value="21">Orissa</option>
      <option value="36">Telengana</option>
      <option value="02">Himachal Pradesh</option>
      <option value="08">Rajasthan</option>
      <option value="02">West Bengal</option>
      <option value="08">Daman & Diu</option>
      <option value="09">Dadra & Nagar Haveli</option>
      <option value="37">Andhra Pradesh (New)</option>
    </select>
  </div>

  <div className="mb-3">
    <label htmlFor="panNumber">
      <strong>PAN Number</strong>
    </label>
    <input 
      type="text"
      placeholder="Enter PAN Number"
      autoComplete="off"
      name="panNumber"
      className="form-control rounded-0"
      onChange={(e) => setPANNumber(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="numOfEntity">
      <strong>Number of Entities with Same PAN Number</strong>
    </label>
    <input 
      type="number"
      placeholder="Enter Number of Entities"
      autoComplete="off"
      name="numOfEntity"
      className="form-control rounded-0"
      onChange={(e) => setNumOfEntity(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="govtBodies">
      <strong>Does your organization belong to GOVT. bodies?</strong>
    </label>
    <select 
      className="form-select rounded-0"
      onChange={(e) => setGovtBodies(e.target.value)}
    >
      <option value="">Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>

  <div className="mb-3">
    <label htmlFor="gstNumber">
      <strong>GST Number</strong>
    </label>
    <input 
      type="text"
      placeholder="Enter GST Number"
      autoComplete="off"
      name="gstNumber"
      className="form-control rounded-0"
      onChange={(e) => setGSTNumber(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="username">
      <strong>Create Username</strong>
    </label>
    <input 
      type="text"
      placeholder="Enter Username"
      autoComplete="off"
      name="username"
      className="form-control rounded-0"
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="password">
      <strong>Create Password</strong>
    </label>
    <input 
      type="password"
      placeholder="Enter Password"
      autoComplete="off"
      name="password"
      className="form-control rounded-0"
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>


      <p>Already have an account</p>
       <Link to="/GstValidate"className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
        Login
       </Link>
       </form>
       
       </div>
    </div>
  );
}

export default SignUp;
