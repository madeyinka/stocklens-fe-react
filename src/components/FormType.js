import React,{useContext} from 'react'
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
import Response from './Response'
import AppContext from '../context/app-context'

const FormType = () => {
 const {page,setPage,loading} = useContext(AppContext);
 if (loading) {
setPage("loading")
 }
 switch (page) {
  case "inventory" :
  return <Inventory />
  case "reports" :
  return <Reports />
  case "branches" :
  return <Branches />
  case "DashboardProfile" :
  return <DashboardProfile />
  case "users" :
  return <Users />
  case "stations":
  return <Stations />
  case "userroutes" :
  return <UserRoute />
  case "products" :
  return <Products />
  case "categories" :
  return <Categories />
  case "loading":
  return <Loading />
  case "response":
  return <Response />
 default:
 return (
  <>
   <h2 className="text-center">
   Default page select your form
   </h2>
  </>
 )
 }
}

export default FormType
