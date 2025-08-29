import React, { useState } from 'react'


export const ustate = () => {

let [info,setinfo] = useState("follow");
let [val,setVal] = useState("heyy");
let[count,setCount] = useState("my count")
let[usState,setUsstate]=useState("crt");
let [set,setSet] = useState("react");

function changetext(){
setinfo("following")
}
function change (){
setVal("hahaha")
}
function change1 (){
setCount("counting start")
}
function change2 (){
setSet("react js")
}
function change3(){
setUsstate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni recusandae est, consequuntur quas voluptate placeat. Ex vero magnam maxime, at magni corporis error, quod inventore placeat reiciendis, debitis delectus.")
}

  return (
    <div>
     
<button onClick={changetext} id='A'>{info}</button>
<button onClick={change}>{val}</button>
<button onClick={change1}>{count}</button>
<h1 onClick={change2}>{set}</h1>
<p onClick={change3}>{usState}</p>


    </div>
  )
}

export default ustate