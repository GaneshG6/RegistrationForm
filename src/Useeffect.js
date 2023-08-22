import React, {useState,useEffect} from "react";
 export default function UseEffect() {
    const [count, setCount] = useState(0)
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        console.log(check)
        if(check){
             setCount(count+1)
        }
        
    })
    return (
        <div>
<button onClick={()=>{setCheck(!check)}}>click</button>
<h1>i have clicked {count}</h1>
<button onClick={()=>{setCount(0)}}>reset</button>
        </div>

    )
 }