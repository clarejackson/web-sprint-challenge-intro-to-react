// Write your Character component here

import React from 'react';
// import 

const CharacterCard = (props) => {
  const { name, image } = props.character
   
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
    </div>
  )
}

export default CharacterCard;