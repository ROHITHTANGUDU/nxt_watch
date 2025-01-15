import "./index.css"
import Header from "../Header"
import Sidebar from "../Sidebar"
const Home = ()=>{
    return(
        <>
            <Header/>
            <div className = "home-background">
                <Sidebar/>
                <div className = "home-right">
                    <h1>
                        Home page
                    </h1>
                </div>
                
            </div>
        </>
        
    )
}

export default Home