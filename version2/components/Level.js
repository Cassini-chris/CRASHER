import Field from './Field.js'
import React from "react";

function Level (props) {

  //Autoincrement Value of Fields
  let x = 0;
  function valueProp() {x = x+1; return (x)};

  //Create Field Array
  let field_array = [];
  for (let step = 0; step < props.blocks; step++) {
    field_array.push(<Field key={step} blocks={props.blocks} level={props.level} value={valueProp()} state={props.state} setCurrentLevel={() => props.setCurrentLevel()} setExplosionState={props.setExplosionState}/>);
  };

  return (
     <div className="container {props.level}-level" >
       <div className="row justify-content-center">
        <h3>Level {props.level}</h3>
        {field_array}
       </div>
     </div>
    )
 ;}

export default Level;
