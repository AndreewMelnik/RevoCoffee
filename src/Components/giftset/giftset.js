import "./giftset.css";

import {Component} from 'react'
import App from "./giftsetCards"


class Giftset extends Component {
   render() {
     return <div className="giftset" id="giftset">
     <div class="giftset-bg"></div>

     <div class="title">
         <p>Best Gift For Best Friend</p>
         <h1>GIFTSET</h1>
     </div>
       <App/>
     </div>;
   }
 }

 export default Giftset

