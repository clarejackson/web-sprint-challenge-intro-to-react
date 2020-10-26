import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/Character'

const App = () => {
  const [character, setCharacter] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log(response);
        setCharacter(response.data.results)
    })
    .catch(error => {
      console.log('the data was not returned', error)
    });
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {character.map( (item) => 
      <CharacterCard character={item} className="Header" />
      )}
    </div>
  );
}

export default App;
