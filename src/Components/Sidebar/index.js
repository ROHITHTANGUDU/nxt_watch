import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { faDatabase, faFire, faGamepad, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Sidebar = (props)=>{

    const [menu,setmenu ] = useState(true)
    const handlemenu = ()=>{

        setmenu((prevstate)=>{
            return !prevstate
        })

    }
    return(
        //maindiv
        <div className = {menu ? "side-bar " : "side-bar collapsed"}> 
           <div className = {menu ? "burger-menu " : "burger-menu collapsed"}>
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt ="logo" className = "side-bar-nxt-logo" />
                <FontAwesomeIcon icon={menu ? faXmark:faBars} className = "burger-icon" onClick={handlemenu} />
           </div>
           <ul className = "unlist-items">
                <li className={`list-item ${menu ? "" : "collapsed"}`}>  
                    <Link to ="/home" className ="link-item" >
                        <FontAwesomeIcon icon={faHouse} className = "logo"  />
                        <h2 className="title">Home</h2>
                    </Link>
                    
                </li>
                <li className={`list-item ${menu ? "" : "collapsed"}`}>
                    <Link to ="/trending" className ="link-item" >
                        <FontAwesomeIcon icon={faFire} className = "logo"  />
                        <h2 className="title">Trending</h2>
                    </Link>
                    
                </li>
                <li className={`list-item ${menu ? "" : "collapsed"}`}>
                    <Link to = "/games"  className ="link-item">
                        <FontAwesomeIcon icon={faGamepad}  />
                        <h2 className="title">Games</h2>
                    </Link>
                </li>
                <li className={`list-item ${menu ? "" : "collapsed"}`}>
                    <Link to = "/savedvideos" className = "link-item">
                        <FontAwesomeIcon icon={faDatabase}/>
                        <h2 className="title">saved Videos</h2>
                    </Link>
                </li>
           </ul>
           <div className = {`side-bar-footer ${menu ? "": "collapsed"}`}>
                <h3 className = "side-bar-footer-header">Contact Us</h3>
                <div className="contactus">
                    <a href = "https://www.facebook.com" target="_blank" rel="noreferrer"> <img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt = "facebook logo" className = "logo"/></a>
                    <a href = "https://www.twitter.com" target="_blank" rel="noreferrer"><img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt = "twitter logo" className = "logo"/></a>
                    <a href = "https://www.linkedin.com" target ="_blank" rel ="noreferrer"><img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt = "linkedIn logo" className = "logo"/> </a>
                </div>
                <h2 className = "footer-work-in-progress">
                    Work In Progress
                </h2>
           </div>

           
        </div>
    )
}

export default Sidebar