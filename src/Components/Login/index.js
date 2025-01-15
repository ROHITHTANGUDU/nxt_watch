import "./index.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"


const Login = ()=>{
    const navigate = useNavigate()
    const [state,setstate] = useState({
        username : "",
        password : "",
        isLoginForErrorMesssage : true,
        errorMessage : ""
    })
    const [showPassword , setshowPassword] = useState(false);

    const token = Cookies.get("jwt_token_nxt_watch_login");
        if(token !== undefined){
            return <Navigate to ="/home"/>
        }



    const loginfun = async (event)=>{
        event.preventDefault();
        
        const userdetails = {
            username : state.username,
            password : state.password
        }
        const obj = {
            method : "POST",
            body: JSON.stringify(userdetails)
            
        }
        try{
            const response = await fetch("https://apis.ccbp.in/login",obj)
            if(response.ok){
                const result = await response.json()
                console.log(result)
                Cookies.set("jwt_token_nxt_watch_login" ,result.jwt_token,{expires:30} )
                navigate("/home")  
            }
            else{
                setstate((prevstate)=>{
                    return{
                        ...prevstate,
                        errorMessage : "Invalid username and password "
                    }
                })
            }
        }catch(error){
            setstate((prevstate)=>{
                return{
                    ...prevstate,
                    errorMessage : "Something went wrong "
                }
            })
        }
    }

    const togglePassword = () => {
        setshowPassword((prevstate) =>{
            return !prevstate
        }); 
    };

    const usernameinput = (event)=>{
        setstate((prevsatte)=>{
            return{
                ...prevsatte,
                username :event.target.value
            }
        })

    }

    const passwordinput = (event)=>{
        setstate((prevsatte)=>{
            return{
                ...prevsatte,
                password :event.target.value
            }
        })

    }
    return(
        <div className = "login-back">
            <div className= "login-card">
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt = "nxt-logo" className = "nxt-logo"/>
                <form className = "form">
                    <label className ="label-element">
                        USERNAME
                    </label>
                    <input type="text"  className = "input-element" onChange={usernameinput}/> 
                    <br/>
                    <label  className ="label-element">
                        PASSWORD
                    </label>
                    <input type={showPassword ? "text" : "password"} className="input-element" onChange={passwordinput}/> 
                    <br/>
                    <div className ="check-box-container">
                        <input type="checkbox" className = "check-box-input" onChange={togglePassword} checked={showPassword} id="showPasswordCheckbox"/>
                        <label htmlFor="showPasswordCheckbox" >
                            Show Password
                        </label>
                    </div>
                    {state.isLoginForErrorMesssage && <p>{state.errorMessage}</p> }
                </form>
                <button className = "login-button" onClick={loginfun}>Login</button>
            </div>
        </div>
    )
}


export default Login