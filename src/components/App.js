import '../components/App.css';
import BotCollection from './BotCollection';
import { useState, useEffect } from 'react';



function App() {
  //takes the initial data when making fetch request
  const [data, setData] = useState([])

  function handleDelete(bot){
    alert("Deleted")
   
    fetch(`http://localhost:8001/bots/${bot.id}` , {
        method :"DELETE",
        headers : {
            "content-Type" : "application/json"
        }
    })
   setData(data)
 }

useEffect( () => {
  fetch(`http://localhost:8001/bots`)
    .then(r => r.json())
    .then(bots => setData(bots))


},[] )
if (!data) return <h1>Loading...</h1>
//console.log(data)
  return (
    <div className="App">
     <h1>My Bot Army</h1>
      <BotCollection handleDelete={handleDelete} onSetData={setData} data={data} />
     
    </div>
  );
}

export default App;
