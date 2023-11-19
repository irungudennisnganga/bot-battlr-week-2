import React from 'react'
import Card from './Card'

function YourBotArmy({clickeddata,onSet}) {
   //this function is used to reset the card to empty
   //console.log(clickeddata)
  function handleClick(){
    onSet([])

  }
  let mapedOver = clickeddata.map(data =>  <Card key={data.id} onHandleClick={handleClick}  bot={data} />)

  
  return (
    <div  className="card-wrapper">
    {clickeddata =='' ? <p>No Bot selected add a bot by simply clicking</p> : mapedOver } 
  
    
    </div>
  )
}

export default YourBotArmy
