import React,{useContext} from 'react'
import AppContext from '../context/app-context'
import Error from './Error'

const Response = () => {
 const {error,message} = useContext(AppContext);

if (error) {
 return <Error />
}
 return (
  <>
   <div className="response-container-show">
   <div className="response-wrapper-show">
    <h3 className="text-success mb-3">
    Congratulations Operation Successful
    </h3>
     <p className="text-center text-dark">{message}</p>
   </div>
   </div>
  </>
 )
}

export default Response
