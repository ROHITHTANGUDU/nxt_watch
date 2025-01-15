import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"


const Header = ()=>{
    return(
        <div className = "header-back">
            <img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt = "nxt-logo" className = "header-nxt-logo"/>
            <div className = "header-buttons">
                <FontAwesomeIcon icon={faMoon} className="header-moon"/>
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt ="profile" className = "header-profile"/>
                <button className = "header-logout">Logout</button>
            </div>
            
        </div>
    )

}

export default Header