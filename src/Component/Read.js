import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Update from './Edit';
import { API_URL } from '../API/url';
import { useNavigate } from 'react-router';

const Read = (props) => {
    const [read, setRead] = useState([]);
    const navigation = useNavigate()

    const getApi = async ()=>{
        let response = await axios.post(API_URL+"/view")
        setRead(response.data.data)
    }

    useEffect(() => {
        getApi()
    }, [])

    const handleEdit = (e, i) => {
       navigation("/Edit", {state:read[i],
    get: getApi})
    }

    const handleDelete = async (id)=>{
        await axios.post(API_URL+"/delete",{
            id
        })
       getApi()
    }
    return (
        <>
           
           <div class="col-lg-7 mx-auto  list-data">
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
       </div>
        </>
    )
}

export default Read