
import React, { useState, useContext } from 'react'
import AppContext from '../context/app-context'
import { Form,   } from 'react-bootstrap';

import axios from 'axios'

const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0/user/modify'
const UserRouteForm = ({station}) => {
 const { userData } = useContext(AppContext);
 const { username, id } = userData;


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


 const handleBranchID = (e) => {
  setUserId(id)
 }
 const handleEmail = (e) => {
  setEmail(e.target.value);
 }
 const handlePassword = (e) => {
  setPassword(e.target.value)
 }
 const handleProfile = (e) => {
  setProfile(e.target.value)
 }
 const handleRole = (e) => {
  setRole(e.target.value)
 }
 const handleStatus = (e) => {
  setStatus(e.target.value)
 }
 const handlePhone = (e) => {
  setPhone(e.target.value)
 }
 const handleFname = (e) => {
  setFname(e.target.value)
 }
 const handleLname = (e) => {
  setLname(e.target.value)
 }
 const handleImage = (e) => {
  setImageUrl(e.target.value)
 }
 const handleStation = (e) => {
  setStation(e.target.value)
 }
 const handleIsAdmin = (e) => {
  setIsAdmin(e.target.value)
 }

 const handleSubmit = () => {
  axios.post(`${url}`, { identity, fname, lname, phone, email, password, role, status, image_url, station_id, isAdmin, profile }).then((res) => {
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

     <label htmlFor="fname">firstname</label>
     <input type="text" placeholder="firstname" className="form-control" value={fname} onChange={handleFname} />

    </div>
    <div className="mb-3">

     <label htmlFor="lname">Lastname</label>
     <input type="text" placeholder="lastname" className="form-control" value={lname} onChange={handleLname} />

    </div>
    <div className="mb-3">

     <label htmlFor="Phone">Phone</label>
     <input type="text" placeholder="Phone" className="form-control" value={phone} onChange={handlePhone} />

    </div>

    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail} />
    </div>
    <div className="mb-3">
     <label htmlFor="sigin-password" className="form-label">Password</label>
     <input type="password" className="form-control" id="siginpassword" placeholder="Enter your Password" value={password} onChange={handlePassword} />
    </div>
    {/* <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">IsAdmin?</label>
     <Form.Select aria-label="Select Role" onChange={handleIsAdmin} value={isAdmin}>
      <option>Open this select menu</option>
      <option value="1">True</option>
      <option value="2">False</option>

     </Form.Select>
    </div> */}
    {/* <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Role</label>
     <Form.Select aria-label="Select Role" onChange={handleRole} value={role}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
     </Form.Select>
    </div> */}
    {/* <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Station ID</label>
     <Form.Select aria-label="Select Role" onChange={handleStation} value={station_id}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
     </Form.Select>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
     <Form.Select aria-label="Select Status" onChange={handleStatus} value={status}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
     </Form.Select>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Optional File Upload</label>
     <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label> Click to upload file</Form.Label>
      <Form.Control type="file" multiple value={image_url} onChange={handleImage} />
     </Form.Group>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Upload Your profile documents</label>
     <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label> Click to upload file</Form.Label>
      <Form.Control type="file" multiple value={profile} onChange={handleProfile} />
     </Form.Group>
    </div> */}
    <button className="btn btn-primary mb-3" onClick={handleSubmit}>
     Submit
  </button>


   </div>


  </>
 )
}

export default UserRouteForm
