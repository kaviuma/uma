import React, { useState } from 'react'

const ustate1 = () => {
let[use,setUse] = useState("use");

let [key,setKey] = useState("key");

let [val,setVal] = useState("val");


function ustate1(){
    setUse ("setUse")
}

function ustate2(){
  setVal("lorem ipsum")
}

function ustate(){
  setKey("hooks")
}


  return (
    <div>
      <button onClick={ustate1}>{use}</button>
<br /><br />
      
      <button onClick={ustate2}>{val}</button>
<br /><br />
      
      <button onClick={ustate}>{key}</button>

    </div>
  )
}

export default ustate1
