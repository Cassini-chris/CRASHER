//Import Libraries / Dependencies
//import { BOMB_1 } from './Bomb';
import Explosion from './Explosion';
import { useState } from 'react';

//Main Function
function Field (props) {

//function ()
  let [bomb_style, setBomb_Style] =  useState();

//() => props.setCurrentLevel()
  //Explosion state
  let [explosionTrue, handleExplosion] = useState(false);

  //Style of Checkbox
  let state_style = "checkboxChecked"
  let [style, setStyle] =  useState(state_style);
  if (props.state==='active') {style ="checkboxChecked"};
  if (props.state==='inactive') {style ="checkboxDisabled"};
  if (props.state=='won') {style ="checkboxWon"};
  if (props.state=='explosion') {style ="checkboxExplosion"};


  let id = "checkbox_"+props.value+"_level_"+props.level;

  //if (BOMB_1===props.value) {style ="checkboxExplosion"};


//Onclick Handler -- Check for Bomb / Explosion > Then set style of Checkbox
function checkForBomb(e) {
  const BOMB_1 = Math.floor(Math.random() * props.blocks) + 1;
  setBomb_Style(BOMB_1);
  console.log("bomb_style: "+BOMB_1);
  console.log("Props: "+ props.value);
  console.log("BOMB: "+ BOMB_1);
  console.log("State: "+  props.state);
  console.log("BLOCK: "+  props.blocks);
  return(BOMB_1);



if(BOMB_1===props.value)
    {  handleExplosion(true);
       console.log("Explosion");
       {style ="checkboxExplosion"};
        props.setExplosionState(1);


    }
 else
     { handleExplosion(false);
       console.log("No Explosion");
       setStyle("checkboxChecked");
       console.log("been pushed: LEVEL" + props.level+ "BOX Number: " + props.value);




     };
 ;}

 //Return JSX
   return (
   <div className="col-sm">
     <div className="checkbox-container">
       <input  className={style} type="checkbox" name="checkbox" disabled={props.disabled} id={id} value="{props.value}" onClick={() => {props.setCurrentLevel(); checkForBomb();}} ></input>
         {explosionTrue && <Explosion />}
     </div>
    </div>
    )

 ;}
  export default Field;
