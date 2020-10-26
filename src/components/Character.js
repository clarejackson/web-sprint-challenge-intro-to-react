// Write your Character component here

import React from 'react';
import { Cards, Img } from './CardStyle'

const CharacterCard = (props) => {
  const { name, image, species, status } = props.character
   
  return (
    
    <Cards>
      <h1>{name}</h1>
      <h2>Species: {species}</h2>
      <p>Status: {status}</p>
      <Img src={image} />
    </Cards>

  );
}

export default CharacterCard;