import axios from "axios";
import React,{useState} from "react";
import validation from "./Validation";

export default function Update(params) {
    const [id, SetId] = useState(params.editUser.id)
const [name, setName] = useState(params.editUser.name);
const [age, setAge] = useState(params.editUser.age);
const [gmail, setGmail] = useState(params.editUser.gmail);
const [mobileNumber, setMobile] = useState(params.editUser.mobileNumber);
const [validate, setValidate] = useState("")

    const upload = async ()=>{
        await axios.post("https://5ee2-103-118-189-15.ngrok-free.app/edit",{
            name,
            age,
            mobileNumber,
            gmail,
            id
        })
        let response = await axios.post("https://5ee2-103-118-189-15.ngrok-free.app/view")
        params.setRead(response.data.data)
        params.setEdit(false)
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
        setValidate("")
    } 
  }}>Submit</button>
</form>
    </div>
        </>
    )
}