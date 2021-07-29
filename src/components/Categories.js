import React,{useState,useContext} from 'react'
import AppContext from '../context/app-context'
import axios from 'axios'
const url = "https://stocklens.herokuapp.com/stock-lens/api/1.0/category/create"
const Categories = () => {
 const {loading,setLoading,etError,setMessage,setPage,setError} = useContext(AppContext);
const [label,setLabel] = useState('');
const [description,setDesc] = useState('');

const handleDesc = (e) => {
 setDesc(e.target.value);
}
const handleLabel = (e) => {
 setLabel(e.target.value);
}
const handleSubmition = (e) => {
 e.preventDefault();
 try {
  setLoading(true);
     axios.post(`${url}/`, { label, description }).then((res) => {
               console.log(res.data)
               if(res.data.error === true) {
                setLoading(false) 
                setError(true);
                setPage("response");
                setMessage(res.data.message)
               }
               else if(res.data.error === false) {
                setLoading(false);
                setError(false);
                setPage("response")
                setMessage(res.data.message);
               }
              
              setLoading(false) 
              // setMessage(res.data.response[0])
              })
 } catch (error) {
  setLoading(false);

  setError(true)
  setMessage(error);
 }
}

 return (
  <>
   <div className="parkup">
  
   <h2>i am the Categories page</h2>
   <div className="row justify-content-center align-items-center">
   <div className="col-md-6">
     <div className="mb-3">
      <label htmlFor="label">Label</label>
      <input type="text" onChange={handleLabel} value={label} placeholder="please input the label" className="form-control" />
     </div>
   </div>
 <div className="col-md-6">
     <div className="mb-3">
      <label htmlFor="desc">Desc</label>
      <input type="text" onChange={handleDesc} value={description} placeholder="please input the description" className="form-control" />
     </div>
 </div>

   </div>
   <button className="btn btn-primary d-block mx-auto" 
   style={{width:'10rem', height:'auto', marging:'auto !important'}}
   onClick={handleSubmition} 
   >
   Submit
   </button>
  </div>

  </>
 )
}

export default Categories
