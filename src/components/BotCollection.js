import React  , {useState} from 'react'
import "./BotCollection.css"
import YourBotArmy from './YourBotArmy'
import Card from './Card'


function BotCollection({data}) {
//console.log(data)
const [clickeddata, setClickeddata]= useState([])
function handleClick(bot){
   //if (bot ===bot) console.log(bot)
   //console.log(bot)
   setClickeddata(bot)
}
//console.log(clickeddata)
  return (
    <div   id='main-card' >
        <YourBotArmy clickeddata={clickeddata} />
        <h2>Bot Available</h2>
        {data.map( bot => {
         return (
           <Card key={bot.id} bot={bot} onHandleClick={handleClick}/>

        )})}
    </div>


                  
           
            )}
  


export default BotCollection
