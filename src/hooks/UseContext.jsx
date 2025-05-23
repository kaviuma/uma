import React, { useEffect, useState } from 'react'

const UseContext = () => {

let [num,setNum] = useState(100);

let[num1,setNum1] = useState(2000);

useEffect(()=>{
    
setNum(101);

setNum1(200);

},[])

// console.log("num",num);


  return (
    <div>
  
  <h1>{num}</h1>


<button onClick={()=>setNum((curr)=>curr+1)}>Add</button>


<h1>{num1}</h1>

<button onClick={()=>setNum1((curr)=>curr+1)}>Click</button>


  </div>
  )
  


  

}

export default UseContext
