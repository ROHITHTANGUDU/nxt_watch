import "./index.css"
import Header from "../Header"
import Sidebar from "../Sidebar"
import { FaFire } from "react-icons/fa";
import { SavedVideosContext } from "../../Context/SavedVideosContext";
import { useContext } from "react";
import Savedvideocard from "../Savedvideocard";



const Savedvideos = ()=>{
    const contextvalue = useContext(SavedVideosContext)
    const {savedvideos} = contextvalue
    console.log("Saved Videos List:", savedvideos);
    return(
        <div>
            <Header/>
            <div className  = "savedvideos__background">
                <Sidebar/>
                <div className = "savedvideos__right">
                    <div className = "savedvideos__header">
                        <FaFire size={40} color="red" className = "fire-emoji" />
                        <h1>
                            Saved Videos
                        </h1>
                    </div>
                    <div>
                        <ul className = "savedvideos__data">
                            {
                                savedvideos.map((each)=>{
                                    return <Savedvideocard each = {each}/>
                                })
                            }

                        </ul>
                       
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Savedvideos