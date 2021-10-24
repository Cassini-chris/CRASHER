//Import Libraries / Dependencies
import { BOMB } from './Bomb';
import Explosion from './Explosion';
import { useState } from 'react';

//Main Function
function Field (props) {

  //Explosion state
  let [explosionTrue, handleExplosion] = useState(false);

  //Style of Checkbox
  const [style, setStyle] =  useState("checkboxChecked");

  //State of Checkbox
  const [state, setState] = useState();


//Onclick Handler -- Check for Bomb / Explosion > Then set style of Checkbox
function handleClick(e) {
  console.log("Props: "+ props.value);
  console.log("BOMB: "+ BOMB);

if(BOMB==props.value)
    {  handleExplosion(true);
       console.log("Explosion");
       setStyle("checkboxExplosion");

    }
 else
     { handleExplosion(false);
       console.log("No Explosion");
       setStyle("checkboxChecked");
     };
 ;}

 //Return JSX
   return (
     <div className="checkbox-container">
       <input  className={style} type="checkbox" id="checkbox_1" name="checkbox" disabled={props.disabled} value="{props.value}" onClick={handleClick}></input>
         {explosionTrue && <Explosion />}
     </div>
    )




 ;}
  export default Field;
