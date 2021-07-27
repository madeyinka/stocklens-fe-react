import React,{useContext} from 'react'
import AppContext from '../context/app-context'

const Sidebar = () => {
 const {component, setComponent,setPage} = useContext(AppContext)
 
 
 return (
  <>
    <div className="sidebar-container bg-brand enforce-sidebar">


    <div className="sidebar-wrapper">

     <div className="sidebar-logo">
      <h2 className="text-white text-bold-3 text-center">
       STOCKLENS
 </h2> 
     </div>
     <ul className="sidebar-list-container">
      <li className="sidebar-list" onClick={() => { setPage("DashboardProfile")}
      }>
        Dashboard
      </li>
      <li className="sidebar-list" onClick={() => { setPage("branches") }}>
        Branches
      </li>
      <li className="sidebar-list" onClick={() => { setPage("stations") }}>
        Stations
      </li>
      <li className="sidebar-list" onClick={() => { setPage("users") }}>
        Users
      </li>
      <li className="sidebar-list" onClick={() => { setPage("categories") }}>
        Categories
      </li>
      <li className="sidebar-list" onClick={() => { setPage("products") }}>
        Products
      </li>
      <li className="sidebar-list" onClick={() => { setPage("inventory") }}>
        Inventory
      </li>
      <li className="sidebar-list" onClick={() => { setPage("reports") }}>
        Reports
      </li>
      <li className="sidebar-list" onClick={() => { setPage("userroutes") }}>
        UserRoutes
      </li>
     </ul>

    </div>

    </div>









  </>
 )
}

export default Sidebar
