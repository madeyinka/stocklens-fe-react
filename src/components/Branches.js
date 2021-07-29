import React,{useState,useContext} from 'react'
import AppContext from '../context/app-context'

import axios from 'axios'
const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0/branch/create/'

const Branches = ({station}) => {
const {userData} = useContext(AppContext);
const {username} = userData;
const [identity,setBranchID] = useState(station);
const [label,setLabel] = useState('');
const [state,setState] = useState('');
const [region,setRegion] = useState('');

const handleRegion = (e) => {
 setRegion(e.target.value)

}
const handleState = (e) => {
 setState(e.target.value)

}
const handleLabel = (e) => {
 setLabel(e.target.value)

}
const handleBranchID = (e) => {
 setBranchID(station)
}
const handleBranchSub = () => {
axios.post(`${url}`, {identity,label,state,region}).then((res) => {
 console.log(res.data);
})


}




 return (
  <>

  <div className="branch-container px-5">
  <div className="mb-3">
  
  <label htmlFor="identity">BranchId</label>
  <input type="text" placeholder="BranchID" className="form-control" value={identity} onChange={handleBranchID} />
  
  </div>
  <div className="mb-3">
  
  <label htmlFor="label">Label</label>
     <input type="text" placeholder="Label" className="form-control" value={label} onChange={handleLabel} />
  
  </div>
  <div className="mb-3">
  
  <label htmlFor="State">State</label>
     <input type="text" placeholder="State" className="form-control" value={state} onChange={handleState} />
  
  </div>
  <div className="mb-3">
  
  <label htmlFor="Region">Region</label>
     <input type="text" placeholder="Region" className="form-control" value={region} onChange={handleRegion} />
  
  </div>
  <button className="btn btn-primary mb-3" onClick={handleBranchSub}
             style={{ width: '10rem', height: 'auto', marging: 'auto !important' }}
  >
  Submit
  </button>
  

  </div>
   
  </>
 )
}

export default Branches
