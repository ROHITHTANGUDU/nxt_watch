import "./index.css"
const Login = ()=>{
    return(
        <div className = "login-back">
            <div className= "login-card">
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt = "nxt-logo" className = "nxt-logo"/>
                <form className = "form">
                    <label className ="label-element">
                        USERNAME
                    </label>
                    <input type="text"  className = "input-element"/> 
                    <br/>
                    <label  className ="label-element">
                        PASSWORD
                    </label>
                    <input type="password"  className="input-element"/> 
                    <br/>
                    <div className ="check-box-container">
                        <input type="checkbox" className = "check-box-input"/>
                        <label>
                            Show Password
                        </label>
                    </div>
                </form>
                <button className = "login-button">Login</button>
            </div>
        </div>
    )
}


export default Login