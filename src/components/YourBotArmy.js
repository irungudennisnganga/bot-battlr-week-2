import React from 'react'
import Card from './Card'

function YourBotArmy({clickeddata,onSet}) {
  console.log(clickeddata)
 // let newCard =  
  function handleClick(){
    console.log("clicked")
    onSet('')

  }
  return (
    <div >
   <Card onHandleClick={handleClick}  bot={clickeddata} />
  
    
    </div>
  )
}

export default YourBotArmy
