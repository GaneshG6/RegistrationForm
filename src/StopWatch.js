import React,{useState, useEffect} from "react";
import './StopWatch.css';

export default function StopWatch() {
    const [hours, setHours] = useState("00");
    const  [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [start, setStart] = useState(false)

    useEffect(()=>{
        if(start){
            if (minutes==60){
                setMinutes(0)
                setHours(parseInt(hours)+ 1)
                setSeconds(0)
            }
            if(seconds!= 60){
                const interval = setInterval(() => {
                    setSeconds(seconds => parseInt(seconds) + 1);
                  }, 1000);
                  return () => clearInterval(interval);
            }
            else {
                setSeconds(0)
                setMinutes(parseInt(minutes)+1)
            }
        }
        
       
    })

    return (
        <>
        <div className="time-box">
               <p className="name"> Stop Watch</p> 
               <h2>UseEffect Project</h2>
            <div className="time-container">
                <div className="time">
                    <h1>{hours}</h1>
                    <p>HOURS</p>
                </div>
                <div>
                    <h1 className="isto">:</h1>
                </div>
                <div  className="time">
                    <h1>{minutes}</h1>
                    <p>MINUTES</p>
                </div>
                <div>
                    <h1 className="isto">:</h1>
                </div>
                <div  className="time">
                    <h1>{seconds}</h1>
                    <p>SECONDS</p>
                </div>
                
            </div>
            <div className="buttons-switch">
                <div className="button-align">
                <div><button onClick={()=>{setStart(false)}}>Pause</button></div>
                <div><button onClick={()=>{setStart(true)}}>Start</button></div>
                <div><button onClick={()=>{setHours("00")
            setMinutes("00")
            setSeconds("00")
            setStart(false)}}>Reset</button></div>
                </div>
                
            </div>
        </div>
        </>
    )
}