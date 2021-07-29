import React, { useState, useContext } from 'react'
import AppContext from '../context/app-context'

import axios from 'axios'
const url = 'https://stocklens.herokuapp.com/stock-lens/api/1.0/inventory/create'

const Inventory = ({ station }) => {
 const { loading, setLoading, error, setMessage, setPage, setError } = useContext(AppContext);


 const [label, setLabel] = useState('');
const [product_id,setProductId] =  useState('');
 const [pms_pump, setPmsPump] = useState('');
 const [dpk_pump, setDpkPump] = useState('');
 const [ago_pump, setAgoPump] = useState('');
 const [pms_storage, setPmsStorage] = useState('');
 const [ago_storage, setAgoStorage] = useState('');
 const [dpk_storage, setDpkStorage] = useState('');



 const handleLabel = (e) => {
  setLabel(e.target.value)

 }
 const handleProductId = (e) => {
  setProductId(e.target.value);
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



 const handleSubmition = (e) => {
  e.preventDefault();
  try {
   setLoading(true);
   axios.post(`${url}`, { product_id, label, pms_pump, pms_storage, ago_pump, ago_storage, dpk_pump, dpk_storage }).then((res) => {
    console.log(res.data)
    if (res.data.error === true) {
     setLoading(false)
     setError(true);
     setPage("response");
     setMessage(res.data.message)
    }
    else if (res.data.error === false) {
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
   <h2 className="text-primary text-center">
   Inventory page
   </h2>
   <div className="branch-container px-5">
   <div className="row">
   
   <div className="col-md-6">
   
    <div className="mb-3">

     <label htmlFor="identity">Product ID</label>
     <input type="text" placeholder="Product ID" className="form-control" value={product_id} onChange={handleProductId} />

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
    </div>
    <div className="col-md-6">
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
    </div>
    <button className="btn btn-primary mb-3 mx-auto" onClick={handleSubmition}
      style={{ width: '10rem', height: 'auto', marging: 'auto !important' }}
    >
     Submit
  </button>

    </div>
   </div>

  </>
 )
}

export default Inventory
