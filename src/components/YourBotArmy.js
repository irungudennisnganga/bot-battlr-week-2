import React from 'react'
import Card from './Card'

function YourBotArmy({clickeddata}) {
  console.log(clickeddata)
 // let newCard =  
  function handleClick(){
    console.log("clicked")
  }
  return (
    <div >
   <Card onHandleClick={handleClick}  bot={clickeddata} />
  
    
    </div>
  )
}

export default YourBotArmy
