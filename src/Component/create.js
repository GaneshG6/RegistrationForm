import React, { useState } from 'react';
import { API_URL } from '../API/url';
import logo from '../1693307835898.png'
import axios from 'axios';
import Read from './Read';
import validation from './Validation';
import { useNavigate } from 'react-router';

const Create = (params) => {
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [gmail, setGmail] = useState("");
const [mobileNumber, setMobile] = useState("");
const [validate, setValidate] = useState("");
const navigate = useNavigate();

const postData = async ()=> {
    await axios.post(API_URL +"/register",{
        name,
        age,
        mobileNumber,
        gmail
    })
    let response = await axios.post(API_URL+"/view")
    setName("")
    setAge("")
    setGmail("")
    setMobile("")
    setValidate("")
    navigate("/Read")
}
// const getData = async ()=>{
//   let response = await axios.post(API_URL+"/view")
// }
  return (
    <>
    <div className='form-container'>
    <form className='form-box col-sm-5 mx-auto p-5 bg-white '>
        <div>
        <img src={logo} class="logo img-fluid" alt="png-image"/>
        </div>
        <div class="mb-3">
    <label for="exampleInputName" class="form-label">UserName</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={name} placeholder='Username' onChange={(event)=>{
        setName(event.target.value)
    }} />
    <p className='text-danger'>{validate.name}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputAge" class="form-label">Age</label>
    <input type="number" class="form-control" id="exampleInputEmail1" value={age} maxLength={2} placeholder='Age' onChange={(event)=>{
       if(event.target.maxLength<event.target.value.length){
        event.target.value = event.target.value.slice(0,event.target.maxLength)
    }
        setAge(event.target.value)
    }} />
    <p className='text-danger'>{validate.age}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={gmail} placeholder='Email' onChange={(event)=>{
        setGmail(event.target.value)
    }} />
    <p className='text-danger'>{validate.gmail}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" value={mobileNumber} placeholder='Mobile number'
    maxLength={10} onChange={(event)=>{
         if(event.target.maxLength<event.target.value.length){
          event.target.value = event.target.value.slice(0,event.target.maxLength)
      }
        setMobile(event.target.value)
    }} />
    <p className='text-danger'>{validate.mobileNumber}</p>
  </div>
  
  <button type="submit" class="btn btn-success" onClick={(e)=>{
    e.preventDefault()

   let errors =  validation(name,age,gmail,mobileNumber)
   if(errors.errorCount){
    setValidate(errors)
   }
   else{
    postData()
   
    // getData()
    
   }
   

  }}>Submit</button>
</form>
    </div>
    </>
  )
}

export default Create