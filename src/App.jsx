// import React from 'react'
// import useRef from './hooks/useRef'
// import Ustate from './hooks/ustate'
// import CR from './CR'
// import { Grid } from './Pages/Grid'
// import G2 from './Pages/G2'
// import Ustate1 from './hooks/ustate1'
// import { useRef } from 'react'
// import Test from './Pages/Test'
// import Conren from './conren'
// import UseContext from './hooks/UseContext'
// import UE from "./hooks/UE"

import { useEffect, useState } from "react"



function App() {

  // let ST = {
  //   marginTop:"10px"
  // }



//   other topic
//   let P =  useRef()
//   let btn  = useRef()

//    function Hide(){

//  if(btn.current.innerText == "Close"){
//   P.current.style.display = "none";
//   btn.current.innerText = "Open"
//  }

//  else{
//   P.current.style.display = "block"
//   btn.current.innerText = "Close"
//  }
//  }


// fakestore 
let[data,setData] = useState([]);

useEffect(()=>{
 fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
  .then(data => setData(data));

  
},[])
console.log(data);
  
return (
   <div>
{data.map((d)=>{
  return(
    <>
    <h2>{d.title}</h2>
    <img src={d.image} alt="" />
    
    </>
  )
})}
       </div>
      
    
  )
}








{/* <Ustate /> */}
 {/* <useRef/> */}
 {/* <CR/> */}
 {/* <Conren/> */}
{/* <Grid/>  */}
 {/* <G2 /> */}
{/* <Ustate1/> */}
{/* <UseContext/> */}




{/* USEREF 
 <button onClick={Hide} ref={btn}>Click</button>

<p ref={P}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quis rem molestias labore quo totam perspiciatis itaque expedita dolorem dolores animi eos aspernatur, a, dolore sint. Ipsa veniam possimus eligendi.</p> */}


{/* Other content
 <button bg="pink">NEXT</button>

<button bg="orange">PREV</button>

<div id='Z' style={ST}>

      <button bg="red">SUBSCRIBE</button>

</div>
*/}

export default App
