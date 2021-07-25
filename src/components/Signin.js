import React,{useRef,useState,useCallback,useEffect, useContext} from 'react'
import { Link,useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './login.css';
import chart from '../images/histogram-chart.png'
import axios from 'axios';
import AppContext from '../context/app-context'

// import { useGlobalContext } from '../Context'
// sXmU7KyDOi
const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0';
const accessToken = localStorage.getItem('accesstoken').toString();

axios.interceptors.request.use(
     config => {
          config.headers.authorization = `Bearer ${accessToken}`;
          return config;
     },
     error => {
          return Promise.reject(error);
     }
)
const Signin = () => {
     const {setLogin,handleGet,login} = useContext(AppContext);

     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');
     const [loading, setLoading] = useState(false);
     const [token, setToken] = useState('');
     
     const handleEmail = (e) => {
          setEmail(e.target.value)
     }
     const handlePassword = (e) => {
          setPassword(e.target.value);
     }

     // useEffect(() => {
     //      handleSubmit();
     // }, []);
     const handleSubmit = () => {
          setLoading(true)
          axios.post(`${url}/auth/login/`, { email, password }).then((res) => {
               console.log(res.data.response,res.data.error);
               setToken(res.data.response);
               localStorage.clear();
               localStorage.setItem('accesstoken', `${res.data.response}` );
               if(res.data.error == false) {
                    setLogin(true);
                    console.log("yeah its a happy day");
               }
               // setLogin(res.data)
          })
          
     }
     const history = useHistory();

     useEffect(() => {
          if (login) {
               history.push('/dashboard')
          }
     }, [login, history])

     // const handleGet = ()=> {
     //      axios.get(`${url}/auth/userContext`).then((res) => {
     //           console.log(res.data);
     //      })
     // }

     

 return (
  <>
 <div className="container-fluider">
 
 <div className="row">
 <div className="col-sm-6">
 <div className="sign-form-big-container">
 <div className="width-70">
 <div className="brand-logo-area">
 <h2 className="text-grand text-bold-3">
 STOCKLENS
 </h2>
 </div>
 <div className="login-welcome">
 <h2 className="text-dark text-bold-2">
 Hi, Welcome to STOCKLENS!
 </h2>
 <p className="small-italic">
 Bringing power to your hands.....</p>
         <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail} />
</div>
         <div className="mb-3">
          <label htmlFor="sigin-password" className="form-label">Password</label>
          <input type="password" className="form-control" id="siginpassword" placeholder="Enter your Password" value={password} onChange={handlePassword} />
</div>
   <Link to='/dashboard' className="d-block btn btn-primary " onClick={handleSubmit}>
   Login
   </Link>
  

 </div>
 </div>
 </div>
 </div>
 <div className="col-sm-6">
      <div className="signin-illlustration-container">
       <div className="chart-conainer width-70" >
      <img src={chart} className="chart-img" alt="chart" />
      <div className="chart-story">
      <h3 className="text-white mt-5 pt-4 text-center">
      WE GIVE YOU DETAILED REPORT AND ANALYSIS
      </h3>
      <p className="text-white text-center">
      Worry Less about your data entry because everthing is under control
      </p>
      </div>
      </div>

 </div>
 </div>
 </div>
 </div>
  </>
 )
}

export default Signin


 // < h1 className = "primary" >
 //  hello i am a sign in page
 //  </h1 >
 // <Link to="/dashboard" className="nav-link text-decoration-none">
 //  Siginup
 //  </Link>