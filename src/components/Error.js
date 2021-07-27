import React,{useContext} from 'react'
import AppContext from '../context/app-context'

const Error = () => {
const {error,message} = useContext(AppContext);

 return (
  <>
   <div className="response-container-show">
   <div className="response-wrapper-show">
    <h2 className="text-danger">
    Oops !!! seems like there is an error
    </h2>
    <p>{message}</p>
   </div>
   </div>
  </>
 )
}

export default Error
