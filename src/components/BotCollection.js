import React from 'react'
import "./BotCollection.css"


function BotCollection({data}) {
console.log(data)

function handleClick(){
    console.log("Clicked")
}
  return (
    <div   id='main-card' >
        
        {data.map( bot => {
         return (
            <div onClick={handleClick} key={bot.id} className="card-wrapper">
            <div className="card">
              <div className="image-wrapper">
               
             <img src={bot.avatar_url} alt='bot' />
               
            </div>
              <div className="text-box-wrapper">
              <div className="text-box">
                <h3 className="heading">
                Name : {bot.name}
               </h3>
                <p  className="text">
                Catch phrase : {bot.catchphrase}
               </p>
              <p className="text">
                   Health : {bot.health}
              </p>
              <p className="text">
                 Damage : {bot.damage}
              </p> 
              <p className="text">
                   Class : {bot.bot_class}
              </p> 
              <p className="text"> 
                Last update : {bot.updated_at}
              </p>  
             </div>
            </div>
             
       
           </div>
        </div>


         )})}
    </div>


                  
           
            )}
  


export default BotCollection

{/* <div id='card' key={bot.id} >
                 <img src={bot.avatar_url} alt='bot'/>
                 <h3>Name : {bot.name}</h3>
                 <p>Catch phrase : {bot.catchphrase}</p>
                 <p>Health : {bot.health}</p>
                 <p>Damage : {bot.damage}</p>
                 <p>Class : {bot.bot_class}</p>
                 <p>Last update : {bot.updated_at}</p>
            </div> */}