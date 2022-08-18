import "./header.css";
import revoLogo from "../../img/svg/revo_logo.svg";


const Header = () => {

    return (
        <div className="header">
            <HeaderWrapper/>
            <HeaderMenu/>
        </div>
    )
}

const HeaderWrapper = () => {
    return(
            <div className="header__logo">
                <a href="!#" className="header__logo-link">
                    <img src={revoLogo}  alt="Your Personalized Coffee" className="header__logo-pic"/>
                </a>
            </div>
    )
}

const HeaderMenu = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    return(
        <nav className="header__menu">
            <ul className="header__list">
                <HeaderItem name="COFFEE" href="#coffee"/>
                <HeaderItem name="COFFEE BLENDS" href="#coffeeblends"/>
                <HeaderItem name="GIFTSETS" href="#giftsets"/>
                <HeaderItem name="COMBO SETS" href="#combosets"/>
                <HeaderItem name="CONTACT US" href="#"/>
            </ul>
        </nav>
    )
}

const HeaderItem = (props) => {
    return(
          <div className="header__item">
              <a href={` ${props.href}`} className="header__link">{props.name}</a>
          </div> 
 )
}


export default Header;