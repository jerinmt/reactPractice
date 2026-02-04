import React from 'react';

function Child(props){
    return( 
        <button onClick={props.bulbSwitch} className={props.currentState?"btn btn-success":"btn btn-danger"}>{props.currentState?"Turn off":"Turn on"}</button>
    )
}
export default Child;