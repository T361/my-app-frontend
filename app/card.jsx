'use client';
import './card.css';
import Logging from './Loginbutton';
import Create from './Createnew.jsx'
// import Verify from './Verify'
function card() {
  return (<div className="card">
    {/* <Verify/> */}
    <br />
    <div className="child3">
      <Logging />
    </div>
    <div className="child5"><a href="">Forgotten password?</a></div>
    <br />
    <hr />
    <Create />
  </div>);
}
export default card;