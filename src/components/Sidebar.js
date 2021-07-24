import React,{useContext} from 'react'
import AppContext from '../context/app-context'

const Sidebar = () => {
 const {component, setComponent} = useContext(AppContext)
 
 
 return (
  <>
    <div className="sidebar-container .bg-brand">


    <div className="sidebar-wrapper">

     <div className="sidebar-logo">
      <h2 className="text-white text-bold-3 text-center">
       STOCKLENS
 </h2> 
     </div>
     <ul className="sidebar-list-container">
      <li className="sidebar-list" onClick={() => { setComponent("<DashboardProfile />")}
      }>
        Dashboard
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Branches />") }}>
        Branches
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Stations />") }}>
        Stations
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Users />") }}>
        Users
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Categories />") }}>
        Categories
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Products />") }}>
        Products
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Inventory />") }}>
        Inventory
      </li>
      <li className="sidebar-list" onClick={() => { setComponent("<Reports />") }}>
        Reports
      </li>
     </ul>

    </div>

    </div>









  </>
 )
}

export default Sidebar
