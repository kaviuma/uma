import React from 'react'

const CR = () => {

    let z = 19;

    let y = "AC";

  return (
    <div>
      
{z && <h1 style={z ? {color:"red",background:"pink"} :  {color:"blue"}}>WORLD...</h1>}


{y && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis aut sed, saepe omnis aliquid tempore minima ab. Dolores voluptatibus nulla assumenda vel recusandae veritatis soluta quod eaque! Nobis, expedita?</p>}

    </div>
  )
}

export default CR
