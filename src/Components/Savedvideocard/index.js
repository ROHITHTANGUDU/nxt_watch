import { Link } from "react-router-dom";
import "./index.css"
const Savedvideocard = (props)=>{
    const {each} = props
    const {channel}=each
    console.log("each");
    console.log(each)
    
    return(
        <Link>
            <li className = "savedvideo__card">
                <img src = {each.thumbnailUrl} className = "savedvideo__image"/>
                <div>

                </div>

            </li>
        </Link>

        
    )

}

export default Savedvideocard