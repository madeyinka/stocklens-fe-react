import React,{useState,useContext} from 'react'
import AppContext from  '../context/app-context'
import axios from 'axios'

const url = "https://stocklens.herokuapp.com/stock-lens/api/1.0/product/create"
const Products = () => {
 const { loading, setLoading, error, setMessage, setPage, setError } = useContext(AppContext);
 const [label,setLabel] = useState('');
 const [code,setCode] = useState('');
 const [image,setImage] = useState('');
 const [unit,setUnit] = useState('');
 const [price,setPrice] = useState('');
 const [description,setDescription] = useState('');




 const handlelabel = (e) => {
  setLabel(e.target.value);
 }
 const handlecode = (e) => {
  setCode(e.target.value);
 }
 const handleImage = (e) => {
  setImage(e.target.value);
 }
 const handleunit = (e) => {
  setUnit(e.target.value);
 }
 const handleprice = (e) => {
  setPrice(e.target.value);
 }
 const handledescription = (e) => {
  setDescription(e.target.value);
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  try {
   setLoading(true);
   axios.post(`${url}/`, { label, description,unit,price,image,code }).then((res) => {
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

   <h2>i am the product page</h2>
   <div className="row">
   <div className="col-md-6">
     <div className="mb-3">

      <label htmlFor="label">label</label>
      <input type="text" placeholder="label" className="form-control" value={label} onChange={handlelabel} />

     </div>
     <div className="mb-3">

      <label htmlFor="code">code</label>
      <input type="text" placeholder="code" className="form-control" value={code} onChange={handlecode} />

     </div>
     <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Optional Image Upload</label>
      <div className="mb-3">
       <label> Click to upload image</label>
       <input type="file" multiple value={image} onChange={handleImage} className="form-control" />
      </div>
     </div>
   </div>
    <div className="col-md-6">
     <div className="mb-3">

      <label htmlFor="unit">unit</label>
      <input type="text" placeholder="unit" className="form-control" value={unit} onChange={handleunit} />

     </div>
     <div className="mb-3">

      <label htmlFor="price">price</label>
      <input type="text" placeholder="price" className="form-control" value={price} onChange={handleprice} />

     </div>
     <div className="mb-3">

      <label htmlFor="description">description</label>
      <input type="text" placeholder="description" className="form-control" value={description} onChange={handledescription} />

     </div>
    </div>
     <button className="btn btn-primary mb-5 py-3" onClick={handleSubmit}
      style={{ width: '10rem', height: 'auto', marging: 'auto !important' }}
     >
      Submit
  </button>
   </div>
  </>
 )
}

export default Products
