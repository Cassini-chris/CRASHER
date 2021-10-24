import Field from './components/Field.js'
import './index.css'
import { useState } from 'react';

function App() {
let x = 0;

  // Autoincrement Value of Fields
  function valueProp()
    {x = x+1;
      return (x)
    };

   return (

  <div>
  <div className="container">


    <h1>Crasher Game</h1>
  <div class="row justify-content-center">
    <div className="col">
        <Field value={valueProp()} />
     </div>
     <div className="col-sm">
        <Field value={valueProp()} />
      </div>
    <div className="col-sm">
       <Field value={valueProp()} />
     </div>
     <div className="col-sm">
        <Field value={valueProp()} />
      </div>
      <div className="col-sm">
          <Field value={valueProp()} />
       </div>
       <div className="col-sm">
          <Field value={valueProp()} />
        </div>
      <div className="col-sm">
         <Field value={valueProp()} />
       </div>
       <div className="col-sm">
          <Field value={valueProp()} />
        </div>
      <div className="col-sm">
          <Field value={valueProp()} />
       </div>
       <div className="col-sm">
          <Field value={valueProp()} />
        </div>
      <div className="col-sm">
         <Field value={valueProp()} />
       </div>
       <div className="col-sm">
          <Field value={valueProp()} />
        </div>


    </div>

    <div className="row">
      <Field value={valueProp()} />
      <Field value={valueProp()} />
      <Field value={valueProp()} />
      <Field value={valueProp()} />
      <Field value={valueProp()} />
      <Field value={valueProp()} />
      <Field value={valueProp()} />
      <Field value={valueProp()} />
   </div>

   <div className="row">
     <Field value={valueProp()} />
     <Field value={valueProp()} />
     <Field value={valueProp()} />
     <Field value={valueProp()} />
     <Field value={valueProp()} />
     <Field value={valueProp()} />
     <Field value={valueProp()} />
     <Field value={valueProp()} />
  </div>

  <div className="row">
    <Field value={valueProp()} />
    <Field value={valueProp()} />
    <Field value={valueProp()} />
    <Field value={valueProp()} />
    <Field value={valueProp()} />
    <Field value={valueProp()} />
    <Field value={valueProp()} />
    <Field value={valueProp()} />
 </div>

 <div className="row">
   <Field value={valueProp()} />
   <Field value={valueProp()} />
   <Field value={valueProp()} />
   <Field value={valueProp()} />
   <Field value={valueProp()} />
   <Field value={valueProp()} />
   <Field value={valueProp()} />
   <Field value={valueProp()} />
</div>

<div className="row">
  <Field value={valueProp()} />
  <Field value={valueProp()} />
  <Field value={valueProp()} />
  <Field value={valueProp()} />
  <Field value={valueProp()} />
  <Field value={valueProp()} />
  <Field value={valueProp()} />
  <Field value={valueProp()} />
</div>

<div className="row">
 <Field value={valueProp()} />
 <Field value={valueProp()} />
 <Field value={valueProp()} />
 <Field value={valueProp()} />
 <Field value={valueProp()} />
 <Field value={valueProp()} />
 <Field value={valueProp()} />
 <Field value={valueProp()} />
</div>
  </div>
  </div>


 );
}
export default App;
