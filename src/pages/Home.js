import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';
import AppContext from '../context/app-context.js';


const Home = () => {
 const [login, setLogin] = useState('true');
const {message} = useContext(AppContext);


 const changeForm = () => {
  setLogin(!login);
 }
 return (
  <>
 <p>{message}</p>
  {/* <button className=" btn btn-primary" onClick={changeForm} >Change</button> */}
  {
   login? <Signin /> : <Signup />
  }
 
  </>
 )
}

export default Home
