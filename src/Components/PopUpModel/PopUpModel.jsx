import React from 'react';
import "./style.css"

const PopUpModel = ({setShowPopUp,show}) => {
  return (
    <div className='model'>
     <h1>{show.name}</h1> 
     <p>confirm your booking</p>
     { show.network && show.network.country && <p>{show.network.country.name}</p>}
     <button onClick={()=>{setShowPopUp(false)}} >confirm</button>
    </div>
  )
}

export default PopUpModel