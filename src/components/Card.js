import React from 'react'

function Card({bot,onHandleClick}) {


    function handleClick(){
        console.log("Deleted")
    }

    
  return (
  
    <div onClick={ () => onHandleClick(bot)}   className="card">
       <div className="image-wrapper">
     
          <img src={bot.avatar_url} alt='bot' />
     
         </div>
           <div className="text-box-wrapper">
              <div className="text-box">
                <h3 className="heading"> {bot.name}  </h3>
                <p className="text"> Catch phrase : {bot.catchphrase} </p>
                <p className="text"> Health : {bot.health}  </p>
                <p className="text"> Damage : {bot.damage}  </p> 
                <p className="text"> Class : {bot.bot_class} </p> 
                <p className="text"> Last update : {bot.updated_at}  </p> 
                
             </div>
           </div>
        </div>
       
       
  )
}

export default Card
