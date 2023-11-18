import '../components/App.css';
import BotCollection from './BotCollection';
import { useState, useEffect } from 'react';


function App() {
  //takes the initial data when making fetch request
  const [data, setData] = useState([])

useEffect( () => {
  fetch(`http://localhost:8001/bots`)
    .then(r => r.json())
    .then(bots => setData(bots))


},[] )

//console.log(data)
  return (
    <div className="App">
      <BotCollection data={data} />
    </div>
  );
}

export default App;
