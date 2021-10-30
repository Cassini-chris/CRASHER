import winner from './winner.png';

function Winner () {
  window.scrollTo(0, 0);
   return (
  <div className="container">
    <div className="row" style={{margin:'0 auto', display:'block'}}>
  <img src={winner} style={{width:'300px'}}/>
    </div>
    </div>

    )
 ;}

  export default Winner;
