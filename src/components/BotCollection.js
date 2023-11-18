import React from 'react'
import "./BotCollection.css"
import YourBotArmy from './YourBotArmy'
import Card from './Card'


function BotCollection({data}) {
console.log(data)

function handleClick(){
     alert ("clicked")
}
  return (
    <div   id='main-card' >
        <YourBotArmy />
        {data.map( bot => {
         return (
           <Card key={bot.id} bot={bot}/>

        )})}
    </div>


                  
           
            )}
  


export default BotCollection
