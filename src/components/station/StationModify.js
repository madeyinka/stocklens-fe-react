import React, { useState, useContext } from 'react'
import AppContext from '../../context/app-context'

import axios from 'axios'
const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0/station/modify/'

const Branches = ({ station }) => {
 const { userData } = useContext(AppContext);
 const { username } = userData;
 const [identity, setBranchID] = useState(station);
 const [label, setLabel] = useState('');
 const [state, setState] = useState('');
 const [region, setRegion] = useState('');
 const [pms_pump, setPmsPump] = useState('');
 const [dpk_pump, setDpkPump] = useState('');
 const [ago_pump, setAgoPump] = useState('');
 const [pms_storage, setPmsStorage] = useState('');
 const [ago_storage, setAgoStorage] = useState('');
 const [dpk_storage, setDpkStorage] = useState('');


 const handleState = (e) => {
  setState(e.target.value)

 }
 const handleLabel = (e) => {
  setLabel(e.target.value)

 }
 const handleBranchID = (e) => {
  setBranchID(station)
 }
 const handlePms = (e) => {
  setPmsPump(e.target.value)
 }
 const handleAgo = (e) => {
  setAgoPump(e.target.value)
 }
 const handleDpk = (e) => {
  setDpkPump(e.target.value)
 }
 const handleDpkStorage = (e) => {
  setDpkStorage(e.target.value);
 }
 const handleAgoStorage = (e) => {
  setAgoStorage(e.target.value);
 }
 const handlePmsStorage = (e) => {
  setPmsStorage(e.target.value);
 }


 const handleBranchSub = () => {
  axios.post(`${url}`, { identity, label, pms_pump,pms_storage,ago_pump,ago_storage,dpk_pump,dpk_storage }).then((res) => {
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

     <label htmlFor="pms_pump">Pms pump</label>
     <input type="text" placeholder="pms_pump" className="form-control" value={pms_pump} onChange={handlePms} />

    </div>
    <div className="mb-3">

     <label htmlFor="ago_pump">Ago pump</label>
     <input type="text" placeholder="ago_pump" className="form-control" value={ago_pump} onChange={handleAgo} />

    </div>
    <div className="mb-3">

     <label htmlFor="dpk_pump">Dpk pump</label>
     <input type="text" placeholder="dpk_pump" className="form-control" value={dpk_pump} onChange={handleDpk} />

    </div>
    <div className="mb-3">

     <label htmlFor="pms_storage">Pms storage</label>
     <input type="text" placeholder="pms_storage" className="form-control" value={pms_storage} onChange={handlePmsStorage} />

    </div>
    <div className="mb-3">

     <label htmlFor="dpk_storage">Dpk storage</label>
     <input type="text" placeholder="dpk_storage" className="form-control" value={dpk_storage} onChange={handleDpkStorage} />

    </div>
    <div className="mb-3">

     <label htmlFor="ago_storage">Ago storage</label>
     <input type="text" placeholder="ago_storage" className="form-control" value={ago_storage} onChange={handleAgoStorage} />

    </div>
    <button className="btn btn-primary mb-3" onClick={handleBranchSub}>
     Submit
  </button>


   </div>

  </>
 )
}

export default Branches
