import bomb from './bomb.png';

function Explosion () {
    window.scrollTo(0, 0);
   return (
  <div className="container">
    <div className="row" style={{margin:'0 auto', display:'block'}}>
  <img src={bomb} style={{width:'300px'}}/>
    </div>
    </div>

    )
 ;}

  export default Explosion;
