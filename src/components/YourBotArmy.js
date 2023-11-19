import React from 'react'
import Card from './Card'

function YourBotArmy({clickeddata,onSet}) {
   //this function is used to reset the card to empty
  function handleClick(){
    onSet([])

  }
  return (
    <div >
    {clickeddata =='' ? <p>No Bot selected</p> : <Card onHandleClick={handleClick}  bot={clickeddata} />} 
  
    
    </div>
  )
}

export default YourBotArmy
