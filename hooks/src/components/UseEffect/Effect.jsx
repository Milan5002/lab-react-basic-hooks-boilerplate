import React, { useContext } from 'react'
import { useState , useEffect} from "react";
import { AppContext } from '../UseContext/ParentContext';

const Effect = () => {
    const [count,setCount] = useState(0)
    const [age,setAge] = useState({first :0 , count : 0})
    const {isDark} = useContext(AppContext)

      useEffect(()=>{
        age.first == 1 ?
        alert(`something changed ${age.count}`) : ""
      },[age])

  return (
    <div style={{border : "1px dashed white" ,
    padding : "10px" , 
    margin : "20px" ,
    backgroundColor : `${isDark ? "black" : "white"}`,
       color : `${isDark ? "white" : "black"}`}}
    >
        <h1> U S E E F F E C T </h1>
        <h3>Count : {count}</h3>
        <h3>Age : {age.count}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>count + </button>
        <button onClick={()=>{
            setAge({first :1 , count : age.count-1})
        }}>age -</button>
    </div>
  )
}

export default Effect