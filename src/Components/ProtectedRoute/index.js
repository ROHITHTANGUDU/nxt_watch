import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"
import { Outlet } from "react-router-dom"

const ProtectedRoute = ()=>{
    const token = Cookies.get("jwt_token_nxt_watch_login")
    if(token === undefined){
        return <Navigate to= "/"/>
    }
    return <Outlet/>
}


export default  ProtectedRoute