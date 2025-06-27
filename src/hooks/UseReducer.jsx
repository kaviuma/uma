import { useReducer } from "react"


function reducer(state,action){

}



function App(){


    let[state,dispatch] = useReducer(reducer,{count:0})


console.log(state);



}
  return (
    <div>    

<h1></h1>

<button>ADD</button>
<button>SUB</button>
<button>RESET</button>

    </div>
  )

export default UseReducer

