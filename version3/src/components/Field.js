//Import Libraries / Dependencies
//import { BOMB_1 } from './Bomb';
import Explosion from './Explosion';
import { useState } from 'react';

//Main Function
function Field (props) {

// const [neuer_state, setneuer_state] = useState();
//   setneuer_state() {
//     let state_var = ""
//     if(props.level===props.c_level)  {state_var ="checkboxUnchecked"; };
//     if(props.level> props.c_level)  {state_var ="checkboxDisabled"};
//     if(props.level< props.c_level)  {state_var ="checkboxWon"};
//     state_var = (state_var+props.value);
//     return state_var
//   };
function CheckExplosion_state ()
{if (props.explosion_state ==1){alert("game")};};

  let [explosionTrue, handleExplosion] = useState(false);

  // const [state_all, setState_all] =  useState("checkboxUnchecked");
  // function run_state_all() {
  //   if(props.level==props.c_level)  {setState_all("checkboxUnchecked"); console.log("checkboxUnchecked")};
  //   if(props.level>=props.c_level)  {setState_all("checkboxDisabled"); console.log("checkboxDisabled")};
  //   if(props.level<=props.c_level)  {setState_all("checkboxWon"); console.log("checkboxWon")};
  //  };

  let [state, setState] =  useState(() => {return "checkboxUnchecked"});
  // function run_state() {
  //   console.log(props.level);
  //   // if(props.level==props.c_level)  {setState("checkboxUnchecked"); console.log("checkboxUnchecked")};
  //   // if(props.level> props.c_level)  {setState("checkboxDisabled"); console.log("checkboxDisabled")};
  //   // if(props.level< props.c_level)  {setState("checkboxWon"); console.log("checkboxWon")};
  //  };


function checkForBomb() {

  // run_state() ;
  const BOMB_1 = Math.floor(Math.random() * props.blocks) + 1;
  console.log("Props: "+ props.value);
  console.log("BOMB: "+ BOMB_1);


 if(BOMB_1===props.value)
    {  handleExplosion(true);
       console.log("Explosion");
       setState("checkboxExplosion");
       props.setC_level(0);

    }
 else
     { handleExplosion(false);
       console.log("No Explosion");
       setState("checkboxWon");
       props.setCurrentLevel();

     };
 ;}

 //Return JSX
   return (
   <div className="col-sm">
     <div className="checkbox-container">

         {(props.level==props.c_level) &&  <input  className={state} level={props.level} type="checkbox" name="checkbox" value="{props.value}" onClick={checkForBomb} ></input>}


     </div>
    </div>
    )

 ;}
  export default Field;
