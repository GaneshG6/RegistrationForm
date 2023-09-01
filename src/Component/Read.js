import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Update from './Edit';

const Read = (props) => {
    const [edit, setEdit] = useState(false);
    const [read, setRead] = useState([]);
    const [editUser,setEditUser] = useState("")

    const callApi = async ()=>{
        let response = await axios.post("https://5ee2-103-118-189-15.ngrok-free.app/view")
        setRead(response.data.data)
    }

    useEffect(() => {
        callApi()
    }, [])

    const handleEdit = (e, i) => {
        // props.setList(false)
        setEdit(true)
       setEditUser(read[i])
    }

    const handleDelete = async (id)=>{
        await axios.post("https://5ee2-103-118-189-15.ngrok-free.app/delete",{
            id
        })
        let response = await axios.post("https://5ee2-103-118-189-15.ngrok-free.app/view")
        setRead(response.data.data)

    }
    return (
        <>
           {
           edit === false ? <div class="col-lg-7 mx-auto  list-data">
           <div class="card border-0 shadow">
               <div class="card-body p-lg-5">
                   <div class="table-responsive">
                       <table class="table m-0">
                           <thead>
                               <tr>
                                   <th scope="col">Name</th>
                                   <th scope="col">Age</th>
                                   <th scope="col">Mobile</th>
                                   <th scope="col">Gmail</th>
                                   <th scope="col"></th>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   read.map((data, index) => {
                                       return <tr>
                                           <td scope="row">{data.name}</td>
                                           <td>{data.age}</td>
                                           <td> {data.mobileNumber}</td>
                                           <td>{data.gmail}</td>
                                           <td>

                                               <ul class="list-inline m-0">
                                                   <li class="list-inline-item">
                                                       <button class="btn btn-success btn-sm rounded-0" type="button"
                                                           data-toggle="tooltip" data-placement="top" title="Edit" onClick={(e) => {
                                                               handleEdit(e, index)
                                                               console.log(index, 89);
                                                           }}>
                                                           <i class="fa fa-edit"></i>Edit</button>
                                                   </li>
                                                   <li class="list-inline-item">
                                                       <button class="btn btn-danger btn-sm rounded-0" type="button"
                                                           data-toggle="tooltip" data-placement="top" title="Delete" onClick={()=>{handleDelete(data.id)}}>
                                                           <i class="fa fa-trash"></i>Delete</button>
                                                   </li>
                                               </ul>
                                           </td>
                                       </tr>
                                   })
                               }
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </div> : <Update editUser={editUser}
       setEdit={setEdit}
       setRead={setRead}/>
           } 
        </>
    )
}

export default Read