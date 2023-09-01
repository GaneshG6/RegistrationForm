import React, {useState, useEffect} from 'react';
import './CrudOperation.css';
import Create from './Component/create';
import Read from './Component/Read';

const CrudOperation = () => {
    const [signUp, setSignUp] = useState(true);
    const [list, setList] = useState(false)

  return (
    <>
    <nav class="navbar navbar-dark position-fixed top-0 start-0 end-0">
  <div class="container-fluid justify-content-center">
    <button className='btn btn-light me-4' onClick={()=>{setSignUp(true)
    setList(false)}}
  >SignUp</button>
    <button className='btn btn-light' onClick={()=>{
      setList(true)
      setSignUp(false)
    }}>List</button>
  </div>
</nav>
{
    signUp && <Create setList={setList}
    setSignUp={setSignUp}/>
}
{
    list && <Read setList={setList}
    setSignUp={setSignUp} />
}
    </>   
  )
}

export default CrudOperation