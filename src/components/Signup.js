import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
 console.log("emmanuel");
 return (
  <>
   <div className="container-fluider">
    <div className="row">
     <div className="col-sm-6">
      <div className="sign-form-big-container">
       <div className="width-70">
        <div className="brand-logo-area">
         <h2 className="text-grand text-bold-3">
          STOCKISH
 </h2>
        </div>
        <div className="login-welcome">
         <h2 className="text-dark text-bold-2">
          Hi, Welcome to STOCKISH!
 </h2>
         <p className="small-italic">
          Bringing power to your hands.....</p>
         <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
         </div>
         <div className="mb-3">
          <label for="sigin-password" className="form-label">Password</label>
          <input type="password" className="form-control" id="siginpassword" placeholder="Enter your Password" />
         </div>
         <div className="mb-3">
          <label for="sigin-password" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="siginpassword" placeholder="Confirm Password" />
         </div>
         <Link to='/dashboard' className="d-block btn btn-grand">
          
   </Link>
        </div>
       </div>
      </div>
     </div>
     <div className="col-sm-6">
      <div className="signin-illlustration-container">

      </div>
     </div>
    </div>
   </div>
   
  </>
 )
}

export default Signup
