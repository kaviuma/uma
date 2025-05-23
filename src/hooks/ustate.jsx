import React, { useState } from 'react'


export const ustate = () => {

let [info,setinfo] = useState("follow");

let [val,setVal] = useState("heyy");

let[count,setCount] = useState("my count")

let[usState,setUsstate]=useState("crt");

let [set,setSet] = useState("react");

function changetext(){

setinfo("following")

setVal("hahaha")

setCount("counting start")

setUsstate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni recusandae est, consequuntur quas voluptate placeat. Ex vero magnam maxime, at magni corporis error, quod inventore placeat reiciendis, debitis delectus.")

setSet("react js")

}

  return (
    <div>
     
<button onClick={changetext} id='A'>{info}</button>

<br /><br /><br />

<button onClick={changetext}>{val}</button>
<br /><br /><br />

<button onClick={changetext}>{count}</button>
<br /><br />

<p onClick={changetext} style={{color:"red"}}>{usState}</p>

<br /><br /><br />

<h1 onClick={changetext}>{set}</h1>




    </div>
  )
}

export default ustate