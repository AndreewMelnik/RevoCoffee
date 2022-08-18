import "./giftset.css";

import {Component} from 'react'
import App from "./giftsetCards"


class Giftset extends Component {
   render() {
     return <div className="giftset" id="giftset">
     <div class="giftset-bg"></div>
     <div class="section__subtitle">Best Gift For Best Friend</div>
     <div class="section__title">GIFTSET</div>
     <App/>
     </div>;
   }
 }

 export default Giftset

