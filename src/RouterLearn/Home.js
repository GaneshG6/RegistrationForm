import React from 'react';
import { useNavigate } from 'react-router';

function Home() {
    const navigation = useNavigate()
  return (
    <>
    
    <div>Home</div>
    <div>
    <button className="btn btn-primary" onClick={()=>{navigation("/")}}>Home</button>
    
    <button className="btn btn-primary" onClick={()=>{navigation("/Login")}}>Login</button>

   </div>
   </>
  
  )
}

export default Home