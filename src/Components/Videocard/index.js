import "./index.css"
import { Link } from "react-router-dom"
const VideoCard = (props)=>{
    const {video :{title,channel :{profile_image_url,name},published_at,id,thumbnail_url,view_count}} = props
    console.log(props)
    return(
        <Link to= {`/vidoes/${id}`}>
            <li className = "video-card">
                <img src = {thumbnail_url} alt ="thumbnail" className = "videocard__thumbnail"/>
                <div className="videocard__bottom">
                    <img src ={profile_image_url} alt = "profile" className="videocard__profile"/>
                    <div className="videocard__content">
                        <p>
                            {title}
                        </p>
                        <p>{name }</p>
                        <span>{view_count} views  </span>
                        <span>{published_at}</span>
                    </div>
                </div>
                
            </li>
        </Link>
        
    )


}


export default VideoCard