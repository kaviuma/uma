import React from 'react'

const conren = () => {

let H = "GOOD MORNING"

let U = 200

  return (
    <div>
    {H && <p style={H ? {color:"white",background:"black"}:{color:"grey"}}>GOOD NIGHT</p>}


    {U && <p style={U ?{border:"1px solid red",background:"pink"}:{}}>TWO HUNDRED</p>}
    </div>
  )
}

export default conren
