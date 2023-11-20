import React  , {useState} from 'react'
import "./BotCollection.css"
import YourBotArmy from './YourBotArmy'
import Card from './Card'


function BotCollection({data,handleDelete}) {
//console.log(data)
const [clickeddata, setClickeddata]= useState([])

function handleClick(bot){
//checks if bot is not already there
  setClickeddata(datas => {
   if(!datas.find(news => news.id ===bot.id)){
     return [...clickeddata,bot]
   } 
   return clickeddata
  })
  
   
}



//console.log(clickeddata)
  return (
    <div   id='main-card' >
        <YourBotArmy onSet={setClickeddata} onHandleDelete={handleClick}   clickeddata={clickeddata} />
        <h2>Bot Collection</h2>
        <div className="card-wrapper">
        {data.map( bot => {
         return (
           <Card onHandleDelete={handleDelete} key={bot.id} bot={bot} onHandleClick={handleClick}/>

        )})}
      </div>
    </div>


                  
           
            )}
  


export default BotCollection
