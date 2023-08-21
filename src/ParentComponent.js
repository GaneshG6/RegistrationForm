import React, { useState } from 'react';
import './ChildComponent.css'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
const [form, setForm] = useState({name: "", age: "", gender: "",mobile: "", email:""});
const [error, setError] = useState({name: "", age: "", gender: "", mobile: "", email: "" ,errorCount: 0})
const [store, setStore] = useState([])
const [upload, setUpload] = useState(false)
const [print, setPrint] = useState(false)
const [edit, setEdit] = useState(false)
const [save, setSave] = useState(false)
console.log(form,6);
console.log(upload, "up");

// const handleEditClick = (()=>{
//     setEdit(!edit)
// })


    return (
        <>
         <div className='container'>
           <h1>REGISTRATION FORM</h1>
           <ChildComponent form = {form} formFunc = {setForm} 
           error = {error}
           upload = {upload}
           uploadFunc = {setUpload}
           errorFunc = {setError}
           printFunc = {setPrint}
           store = {store}
           storeFunc = {setStore}
           />
        </div>
       
       {/* { print && <div className='details-container'>
            {store.map((details)=>{
                return edit == false ? <div className='details-container2' >
                 <h1 className='heading'>User Details Of {details.name}</h1>
                 <button onClick={handleEditClick}>Edit</button>
                 <button onClick={handleEditClick}>Save</button>
                 <div className='details'>
                 <li> <b>Name :</b> {details.name}</li> 
                  <li> <b>Age : </b>{details.age}</li>
                  <li> <b>Gender :</b>{details.gender}</li>   
                  <li> <b>Mobile :</b>{details.mobile}</li>  
                  <li> <b>Email :</b>{details.email}</li> 
                 </div>
                 
                </div> : <div className='details-container2' >
                 <h1 className='heading'>User Details Of {details.name}</h1>
                 <button onClick={handleEditClick}>Edit</button>
                 <button onClick={handleEditClick}>Save</button>
                 <div className='details'>
                 <ChildComponent form = {form} formFunc = {setForm} 
           error = {error}
           upload = {upload}
           uploadFunc = {setUpload}
           errorFunc = {setError}
           printFunc = {setPrint}
           store = {store}
           storeFunc = {setStore}
           />
                 </div>
                </div>
            })}
            </div>}  */}

            {
                 print && <div className='details-container'>
                 {store.map((details)=>{
                     return <div className='details-container2' >
                      <h1 className='heading'>User Details Of {details.name}</h1>
                     
                      <div className='details'>
                      <li> <b>Name :</b> {details.name}</li> 
                       <li> <b>Age : </b>{details.age}</li>
                       <li> <b>Gender :</b>{details.gender}</li>   
                       <li> <b>Mobile :</b>{details.mobile}</li>  
                       <li> <b>Email :</b>{details.email}</li> 
                      </div>
                     </div> 
           })}
           </div>}
        </>
    )
}
export default ParentComponent