
import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {

  const [search , setScarch] = useState('');
  const [data , setData] = useState('');


  const YOUR_APP_ID = "ded7f2e0";
  const YOUR_APP_KEY = "8e2d4c88dad62111c018d898e1c12e8a";

  const shumitHandler = e =>{
    e.preventDefault();
    console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data =>  setData(data.hits)
    )
  }




  return (
    <div className="App">
      <br/>
      <form onSubmit={shumitHandler}>
        <input type="text" value={search} onChange={ (e) => setScarch(e.target.value)}/> <br/>
        <input type="submit" value="Search" className='btn btn-primary'/>
      </form>
        
    </div>
  );
}

export default App;
