
import React,{useContext, useState,useEffect} from 'react';
import axios from 'axios';

const url = ' https://stocklens.herokuapp.com/stock-lens/api/1.0/'

const AppContext = React.createContext();
const AppProvider = ({children}) => {

const [loading, setLoading] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
useEffect(()=> {
handleSubmit();
}, []);
 const handleSubmit = () => {
  setLoading(true)
  axios.post(`${url}/auth/login/`, { email, password }).then((res) => {
   console.log(res.data);
   setLogin(res.data)
  })
 }

 return <AppContext.Provider value={{setEmail, setPassword,email, password}}></AppContext.Provider>
}
// custom hook
export const useGlobalContext = ()=> {
  return useContext(AppContext)
}

export {AppContext, AppProvider};
