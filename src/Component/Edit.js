import axios from "axios";
import React,{useState} from "react";
import validation from "./Validation";
import { API_URL } from "../API/url";
import { useLocation, useNavigate } from "react-router";

export default function Update() {
const location = useLocation()
console.log(location);
const [id, SetId] = useState(location.state.id)
const [name, setName] = useState(location.state.name);
const [age, setAge] = useState(location.state.age);
const [gmail, setGmail] = useState(location.state.gmail);
const [mobileNumber, setMobile] = useState(location.state.mobileNumber);
const [validate, setValidate] = useState("");
const navigate = useNavigate()

    const upload = async ()=>{
        await axios.post(API_URL+"/edit",{
            name,
            age,
            mobileNumber,
            gmail,
            id
        })
        let response = await axios.post(API_URL+"/view")
        setValidate("")
        navigate("/Read")
    }

    return (
        <>
         <div className='form-container'>
    <form className='form-box col-sm-5 mx-auto p-5 bg-white '>
        <div class="mb-3">
    <label for="exampleInputName" class="form-label">UserName</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(event)=>{
        setName(event.target.value)
    }} />
     <p className='text-danger'>{validate.name}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputAge" class="form-label">Age</label>
    <input type="number" class="form-control" id="exampleInputEmail1" value={age} maxLength={2} onChange={(event)=>{
        if(event.target.maxLength<event.target.value.length){
            event.target.value = event.target.value.slice(0,event.target.maxLength)
        }
        setAge(event.target.value)
    }} />
    <p className='text-danger'>{validate.age}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={gmail} onChange={(event)=>{
        setGmail(event.target.value)
    }} />
    <p className='text-danger'>{validate.gmail}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" value={mobileNumber} maxLength={10} onChange={(event)=>{
       if(event.target.maxLength<event.target.value.length){
        event.target.value = event.target.value.slice(0,event.target.maxLength)
    }
       setMobile(event.target.value)
    }} />
    <p className='text-danger'>{validate.mobileNumber}</p>
  </div>
  
  <button type="submit" class="btn btn-success" onClick={(e)=>{
      e.preventDefault()
    let errorEdit = validation(name,age,gmail,mobileNumber)
    if(errorEdit.errorCount){
        setValidate(errorEdit)
    }
    else {
        upload()
       
    } 
  }}>Submit</button>
</form>
    </div>
        </>
    )
}