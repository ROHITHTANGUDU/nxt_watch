import "./index.css";
import { useParams } from "react-router-dom"


const Videodetails = (props)=>{
    const {id} = useParams()
    return(
        <div>
            <h1>
                {id}

            </h1>
        </div>
    )

}
export default Videodetails