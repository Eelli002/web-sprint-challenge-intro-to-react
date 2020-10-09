// Write your Character component here
import React from 'react';

const Character = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.character.image} />
            <h2>{props.character.name}</h2>
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Status: {props.character.status}</p>
        </div>
    );
}
export default Character;