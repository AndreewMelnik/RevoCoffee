import "./giftsetCards.css"
import Coffee from "../../img/svg/coffee_beans.svg";
import Mountain from "../../img/svg/mountain.svg";
import Giftset1 from "../../img/png/giftset.png";
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
     {name: "GIFTSET “CÀ PHÊ PHIN VIỆT NAM”", price: "$ 20.00", src:Giftset1, beans: "Fine robusta brend", height: "700 - 800m ",id: 1, 
     description: "Món quà tuyệt vời dành cho người sành cà phê.Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ nhữngnghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những táchcà phê tinh khiết chỉ dành riêng cho bạn."},
     {name: "GIFTSET “TỐ NỮ", price: "$ 23.00", src:Giftset1, beans: "Fine robusta brend", height: "700 - 800m ", id: 2, 
     description: "Món quà tặng rất Việt Nam: thể hiện tính truyền thống từ sản phẩm cho tới bao bì và được đặt trong thiết kế hiện đại – độc đáo!.Bộ giftset Tố Nữ tiêu chuẩn bao gồm: – Hộp đựng 2 tầng bằng giấy kraft, với thiết kế lấy ý tưởng từ bộ tranh Tố Nữ – thuộc dòng tranh dân gian Hàng Trống– Gói cà phê Revo Morning 250gr – với gu vị cân bằng, là món quà tuyệt vời dành cho những người nước ngoài muốn thử hương vị cà phê Việt Nam chất lượng cao– Phin mạ màu cao cấp từ Revo Coffee"},
     {name: "MODERN VIETNAMESE COFFEE BLEND BOX", price: "$ 25.00",src:Giftset1,beans: "Fine robusta brend", height: "700 - 800m ", id: 3, 
     description: "Trên các cao nguyên của Việt Nam.Cây cà phê được chăm chút bởi hơi nước , ánh sáng , gió , mưa  và sự cần cù của người nông dân chân chất, kết tinh thành những hạt cà phê chất lượng, đậm đà, đặc trưng…Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.Bộ blend box gồm 3 hương vị đặc trưng của Revo: Revo Origin, Revo Natural, Revo Honey."},
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
                            <div className="giftset__price price">{price}</div>
                            <div className="giftset__name name">{name}</div>
                            <div className="giftset__description description">{description}</div>
                            <div className="giftset__info">
                               <div className="giftset__info">
                                  <img src={Coffee} alt=""/>
                                  <div className="info__text">
                                     <div className="info__title">Beans</div>
                                     <div className="info__subtitle">{beans}</div>
                                  </div>
                               </div>
                               <div className="giftset__info">
                                  <img src={Mountain} alt=""/>
                                  <div className="info__text">
                                     <div className="info__title">Height</div>
                                     <div claclassNamess="info__subtitle">{height}</div>
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
