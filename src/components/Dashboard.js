import React,{useState, useContext,useEffect} from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import AppContext from '../context/app-context'
import Sidebar from './Sidebar'
import DashboardProfile from './DashboardProfile'
import Users from './Users'
import Reports from './Report'
import Inventory from './Inventory'
import Stations from './Stations'
import Products from './Products'
import Categories from './Categories'
import Branches from './Branches'
import ModifyBranch from './ModifyBranch'
import Header from './Header'
import StationCreate from '../components/station/StationCreate'
import StationModify from '../components/station/StationModify'
import UserRoute from './UserRoute'
import Loading from './Loading'
import FormType from './FormType'


const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0';
const accessToken = localStorage.getItem('accesstoken');

axios.interceptors.request.use(
 config => {
  config.headers.authorization = `Bearer ${accessToken}`;
  return config;
 },
 error => {
  return Promise.reject(error);
 }
)

const Dashboard = () => {
 const {login,handleGet,userData,component,loading,page,setPage}  = useContext(AppContext);
 const {id,ago_meter,ago_tank, dpk_meter, pms_meter,pms_tank, station,username} = userData;
 const history = useHistory();

 useEffect(() => {
  if (!login) {
   history.push('/')
  }
  handleGet();
 }, [login,history])
 // const handleGet = () => {
 //  axios.get(`${url}/auth/userContext`).then((res) => {
 //   console.log(res.data);
 //  })
 // }

    if (loading) {
        return (
            <main className="d-flex align-items-center justify-content-center">
                <Loading />
            </main>
        )
    }
 return (
  <>
 <div className="dashboarding">
    <Header />
 <div className="row">
 <div className="col-md-3">
                     <Sidebar className="position-absolute top-0 start-0" />
 </div>
 <div className="col-md-9">
     <div className="stocklens-view">
     
       {/* {component} */}
       {/* <UserRoute station={station} /> */}
       <FormType />
       {/* <Link to="userroute">
       Link
       </Link> */}
      {/* <p className="text-danger">
       USER: {username}
      </p>
      <p className="text-primary">
       USERID: {id}
      </p>
      <p> AGO METER:{ago_meter}</p>
      <p> DPK METER:{dpk_meter}</p>
      <p>AGO TANKER: {ago_tank}</p>
      <p> PMS:METERS:{pms_meter}</p>
      <p>PMS TANKER: {pms_tank}</p>
      <p className="text-info">
       stationID: {station}
      </p> */}
     </div>
 </div>
 </div>
 
 </div>
  {/* <Button variant="primary" onClick={handleGet} >
  get info
  </Button>  */}
  
  </>
 )
}

export default Dashboard
