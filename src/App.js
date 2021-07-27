import React, { useState } from 'react'
import data from './data'
import List from './List'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './pages/Home';
import UserRoute from './components/UserRoute'
import Dashboard from './components/Dashboard'
import AppState from './context/AppState';


function App() {
  
  return (
    <>
  <AppState>

 
    <Router>
      <Switch>
        <Route   path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userroute" component={UserRoute} />


      </Switch>



    </Router>
      </AppState>
    </>
  )
}

export default App
