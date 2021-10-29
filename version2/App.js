import Level from './components/Level.js'
import './index.css'
import { useState } from 'react';

function App() {

let level = 0;
let state = 'active';
let bomb = "0";
  // Autoincrement Value of Level
  function valueLevel() {level = level+1; return (level)};

  // Current Level
  const [c_level, setC_level] =  useState(1);
  function setCurrentLevel(){setC_level(c_level+1); };

  // Explosion State Level
  const [explosion_state, setExplosion_State] =  useState(0);
  function setExplosionState(){setExplosion_State(1); setState () };

  function setState (){
    console.log(console.log("ex: "+ explosion_state))
    if(explosion_state ==1)
        {state='explosion'; console.log("setState: " + level +' explosion'); return state}
    else {
   if (level===c_level)
      {state='active'; console.log("setState: " + level +' active'); return state}
   if (level<c_level)
      {state='won'; console.log("setState: " + level +' won'); return state}
   if (level>c_level)
      {state='inactive'; console.log("setState: " + level +' inactive'); return state}
}
    };

   return (

  <div id="all_JSX_________________________________________________________">
    <h1>Crasher Game</h1>
    <Level blocks="100" level={valueLevel()} state={setState ()} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState}/>
    <Level blocks="10" level={valueLevel()} state={setState ()} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState}/>
    <Level blocks="2" level={valueLevel()} state={setState ()} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState}/>
  </div>


 );
}
export default App;
