import React from 'react'
import Card from './Card'

function YourBotArmy({clickeddata,onSet,onHandleDelete}) {
   //this function is used to reset the card to empty
   //console.log(clickeddata)
  function handleDelete(data){
    //this filter method will return an array with the array that do not match the clicked one
    let filterd=clickeddata.filter(datas => data !==datas)
   
    onSet(filterd)

  }
  let mapedOver = clickeddata.map(data =>  <Card onHandleDelete={onHandleDelete}  key={data.id} onHandleClick={ () => handleDelete(data)}  bot={data} />)


  return (
    <div  className="card-wrapper">
    {clickeddata =='' ? <p>No Bot selected add a bot by simply clicking</p> : mapedOver } 
  
    
    </div>
  )
}

export default YourBotArmy
