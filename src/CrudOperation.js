import React, {useState, useEffect} from 'react';
import './CrudOperation.css';
import Create from './Component/create';
import Read from './Component/Read';
import {BrowserRouter as Router, Routes, Route, useNavigate, Link, NavLink, Outlet,} from 'react-router-dom'
import Update from './Component/Edit';

const CrudOperation = () => {
    // const [signUp, setSignUp] = useState(true);
    // const [list, setList] = useState(false)
   

  return (
    <>
    <Router>

    <nav class="navbar navbar-dark position-fixed top-0 start-0 end-0">
  <div class="container-fluid justify-content-center">
    <Link className='btn btn-light me-4' to="/"
  >SignUp</Link>
    <Link className='btn btn-light' to="/Read" >List</Link>
   
  </div>
</nav>

      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/Read' element ={<Read/>}/>
        <Route path = '/Edit' element = {<Update/>}/>
      </Routes>
    </Router>

    

     {/* <div className='navList'>
      <button className='btn btn-outline-light me-3' onClick={()=>{
       
      }}>
        SignUp
      </button>
      <button className='btn btn-outline-light ms-3'>List</button>
      </div> */}
    </>  
    
  )
}

export default CrudOperation