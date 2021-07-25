import React, { useState, useContext } from 'react'
import AppContext from '../context/app-context'

import axios from 'axios'
const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0/branch/create/'

const UserRoute = ({ station }) => {
 const { userData } = useContext(AppContext);
 const { username,id } = userData;
 const [identity, setUserId] = useState(id);

 const [userID, setRegion] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [fname, setFname] = useState('');
 const [lname, setLname] = useState('');
const [phone, setPhone] = useState('');
const [role, setRole] = useState('');
const [profile, setProfile] = useState('');
const [status, setStatus] = useState('');
const [image_url, setImageUrl] = useState('');
const [station_id, setStation] = useState('');
const [isAdmin, setIsAdmin] = useState(false);
 const handleRegion = (e) => {
  setRegion(e.target.value)

 }
 const handleState = (e) => {
  setState(e.target.value)

 }
 const handleLabel = (e) => {
  setLabel(e.target.value)

 }
 const handleBranchID = (e) => {
  setUserId(id)
 }
 const handleEmail = (e) => {
  setEmail(e.target.value);
 }
 const handlePassword = (e) => {
  setPassword(e.target.value)
 }
 const handleBranchSub = () => {
  axios.post(`${url}`, { identity, label, state, region }).then((res) => {
   console.log(res.data);
  })


 }




 return (
  <>

   <div className="branch-container px-5">
    <div className="mb-3">

     <label htmlFor="identity">BranchId</label>
     <input type="text" placeholder="BranchID" className="form-control" value={identity} onChange={handleBranchID} />

    </div>
    <div className="mb-3">

     <label htmlFor="label">Label</label>
     <input type="text" placeholder="Label" className="form-control" value={label} onChange={handleLabel} />

    </div>
    <div className="mb-3">

     <label htmlFor="State">State</label>
     <input type="text" placeholder="State" className="form-control" value={state} onChange={handleState} />

    </div>
    <div className="mb-3">

     <label htmlFor="Region">Region</label>
     <input type="text" placeholder="Region" className="form-control" value={region} onChange={handleRegion} />

    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail} />
    </div>
    <div className="mb-3">
     <label htmlFor="sigin-password" className="form-label">Password</label>
     <input type="password" className="form-control" id="siginpassword" placeholder="Enter your Password" value={password} onChange={handlePassword} />
    </div>
    <button className="btn btn-primary mb-3" onClick={handleBranchSub}>
     Submit
  </button>


   </div>

  </>
 )
}

export default UserRoute
