import Level from './components/Level.js'
import './index.css'
import { useState } from 'react';
import Explosion from './components/Explosion';
import Winner from './components/Winner';

function App() {

let level = 0;
let state = 'active';

  // Autoincrement Value of Level
  function valueLevel() {level = level+1; return (level)};

  // Current Level
  const [c_level, setC_level] =  useState(() => {return 1});
  console.log(c_level);
  //const setCurrentLevel = () => setC_level(c_level+1);
  function setCurrentLevel(c_level) {setC_level(c_level => c_level +1)};

  // Explosion State Level
  const [explosion_state, setExplosion_State] =  useState(0);
  const  setExplosionState = () => {setExplosion_State(1)};

  //Set State for Level
  function setFieldState () {
state='checkboxExplosion'; return state;
//     if(explosion_state==1) {state='checkboxExplosion'; return state; console.log("FieldState: " +state);}
//     else {
// console.log("FieldState: " +state);
//         if (level==c_level)
//           {state='checkboxUnchecked'; return state; console.log("FieldState: " +state);}
//         if (level<c_level)
//           {state='checkboxWon';return state; console.log("FieldState: " +state);}
//         if (level>c_level)
//           {state='checkboxDisabled'; return state; console.log("FieldState: " +state);}
//     };


    };

   return (

  <div style={{textAlign:'center', color:'white'}} id="all_JSX_________________________________________________________">
    <h1 style={{fontSize: 100}} >Crasher Game</h1>
         {c_level==0 &&   <h1 style={{fontSize: 100, color:'red'}} >YOU LOST</h1>}
          {c_level==12 &&   <h1 style={{fontSize: 100, color:'rgb(127, 255, 212)'}} >YOU WON</h1>}
           {c_level==0 && <Explosion />}
            {c_level==12 && <Winner />}
            <Level blocks="100" level={valueLevel()} c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="75" level={valueLevel()} c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="50" level={valueLevel()}  c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="25" level={valueLevel()} c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="20" level={valueLevel()}  c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="15" level={valueLevel()}  c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="10" level={valueLevel()} c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="8" level={valueLevel()}  c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="6" level={valueLevel()} c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="4" level={valueLevel()}  c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>
            <Level blocks="2" level={valueLevel()} c_level={c_level} setFieldState={setFieldState} setCurrentLevel={setCurrentLevel} setExplosionState={setExplosionState} setC_level={setC_level}/>



  </div>
 );
}
export default App;
