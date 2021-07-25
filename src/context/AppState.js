import React, { useState } from 'react'
import AppContext from './app-context'
import axios from 'axios'

const baseurl = 'https://stocklens.herokuapp.com/stock-lens/api/1.0';
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
const AppState = (props) => {
 const [isAuth, setIsAuth] = useState(true);
 const [login, setLogin] = useState(false);
 const [component,setComponent] =  useState("StationCreate");
 const [userData, setUserData] = useState('');
 const handleGet = () => {
  axios.get(`${baseurl}/auth/userContext`).then((res) => {
   console.log(res.data.response);
   setUserData(res.data.response);
  })
 }
 return (
  <AppContext.Provider value={{
   message: 'This is from the context',
   isAuth, setIsAuth, login,setLogin,handleGet,userData,component,setComponent

  }}>
   {/* The below makes the value to be made available for all the children have access to it */}
   {props.children}
  </AppContext.Provider>
 )
}

export default AppState
