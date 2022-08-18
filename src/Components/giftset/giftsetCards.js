import "./giftsetCards.css"
import Coffee from "../../img/svg/coffee_beans.svg";
import Mountain from "../../img/svg/mountain.svg";
import Giftset1 from "../../img/png/giftset.png";
import Giftset2 from "../../img/png/223.png";
import Giftset3 from "../../img/png/443.png";
import { Component } from 'react'
import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            {
              giftsetData.map(({id}) => (
                <MDBTabsItem>
                  <MDBTabsLink 
                    onClick={() => handleVerticalClick(`tab${id}`)} 
                    active={verticalActive === `tab${id}`}
                  >
                    {id}
                  </MDBTabsLink>
                </MDBTabsItem>
              ))
            }
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
          {   // КАК ОТОБРАЗИТЬ ТАБЫ ПО ID ИЗ МАССИВА:
          
              giftsetData.map((snippet) => (
                <MDBTabsPane 
                  show={verticalActive === `tab${snippet.id}`}
                >
                  <GiftsetContent key={snippet.id} {...snippet} />
                </MDBTabsPane>
              ))
            }
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}

 const giftsetData= [
     {name: "Giftset Cà phê phin Việt Nam", price: "$ 20.00", src:Giftset1, beans: "Fine robusta brend", height: "700-800m ",id: 1, 
     description: "A great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo, roasted according to the technology and know-how learned from famous artisans, along with the love and passion of coffee makers. … create pure coffee just for you."},
     {name: "Giftset Một món quà cho các gia đình ", price: "$ 23.00", src:Giftset2, beans: "Fine robusta brend", height: "700 - 800m ", id: 2, 
     description: "A great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo, roasted according to the technology and know-how learned from famous artisans, along with the love and passion of coffee makers. … create pure coffee just for you."},
     {name: "Giftset Bạn bè muốn uống cà phê", price: "$ 25.00",src:Giftset3,beans: "Fine robusta brend", height: "700 - 800m ", id: 3, 
     description: "A great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo, roasted according to the technology and know-how learned from famous artisans, along with the love and passion of coffee makers. … create pure coffee just for you.."},
 ]
 
    class GiftsetContent extends Component {
       
         render() {
          const {name, price, beans, height, description,src,id,} = this.props;
           return(
              <div class="tabs-content">
                      <div id={id} className="tabs-content__item">
                         <img src={src} alt={name}/>
                         <div className="giftset__content">
                          <div className="giftset__bg"></div>
                            <div className="giftset__price">{price}</div>
                            <div className="giftset__name">{name}</div>
                            <div className="giftset__description">{description}</div>
                            <div className="giftset__info">
                                  <img src={Coffee} alt=""/>
                                  <div className="info__text">
                                     <div className="info__title">Beans</div>
                                     <div className="info__subtitle">{beans}</div>
                                  </div>
                               <div className="giftset__info">
                                  <img src={Mountain} alt=""/>
                                  <div className="info__text">
                                     <div className="info__title">Height</div>
                                     <div className="info__subtitle">{height}</div>
                                  </div>
                               </div>
                            </div>
                            <div className="giftset__link">
                               <button className="giftset__btn buy">BUY NOW</button>
                               <button className="giftset__btn desc">MORE</button>
                            </div>
                            </div>
                         </div>
                  </div> 
             )}
     }   
