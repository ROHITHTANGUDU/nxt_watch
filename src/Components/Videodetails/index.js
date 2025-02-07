import { useContext, useEffect,  useState } from "react"
import { useParams} from "react-router-dom"
import Cookies from "js-cookie"
import Header from "../Header"
import Sidebar from "../Sidebar"
import "./index.css";
import ReactPlayer from "react-player"
import {formatDistanceToNow} from 'date-fns'
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { MdSave } from "react-icons/md";
import { SavedVideosContext } from "../../Context/SavedVideosContext"







const Videodetails = (props)=>{
    const [videodetailsdata , setVideodetailsdata] = useState({})
    const {id} = useParams()
    const [like,setLike] = useState(false)
    const [dislike,setDislike] = useState(false)
    const contextvalue = useContext(SavedVideosContext)
    const {savedvideos,savedvideosfunction} = contextvalue


    const savevidoesfun = ()=>{
        savedvideosfunction(videodetailsdata)
    }

    const issaved = savedvideos.some((each)=>{
                return each.id === videodetailsdata.id
            })
        
    

    const handlelike =  ()=>{
        setLike((prev)=>{
            return !prev
        })
        setDislike(false)
    }
    const handledislike =  ()=>{
        setDislike((prev)=>{
            return !prev
        })
        setLike(false)
    }
    const fetchvideodetails = async ()=>{
        const token = Cookies.get("jwt_token_nxt_watch_login")
        const obj = {
            method :"GET",
            headers :{
                Authorization : `Bearer ${token}  `
            }
        }
        try{
            const fetchdata = await fetch(`https://apis.ccbp.in/videos/${id}` , obj)
            if(fetchdata.ok){
                const response = await fetchdata.json()
                console.log(response)
                if(response.video_details){
                    const vidoeDetails = {
                   
                        channel:{
                            name : response.video_details.channel.name,
                            profileImageUrl : response.video_details.channel.profile_image_url,
                            subscriberCount : response.video_details.channel.subscriber_count
                        },
                        description : response.video_details.description,
                        id : response.video_details.id,
                        publishedAt : response.video_details.published_at,
                        thumbnailUrl : response.video_details.thumbnail_url,
                        title : response.video_details.title,
                        videoUrl : response.video_details.video_url,
                        viewCount : response.video_details.view_count

                  
                    }
                setVideodetailsdata(vidoeDetails)

                }
                

            }
            else{
                console.log("data failed to fetch")
            }

        }catch(error){
            console.log(error)
        }
        

    }
    useEffect(()=>{
        fetchvideodetails()
    },[])
    
    return(
  
        <>
              {console.log(savedvideos)}
              {console.log(issaved)}
            <Header/>
            <div className = "videodetails__background">
                <Sidebar/>
                <div className = "videodetails__right">
                    <div className = "videoplayer__background">
                        {videodetailsdata ?<ReactPlayer url = {videodetailsdata.videoUrl} controls={true} volume={0.5} width="100%" height="60%"/>: <p>...Loading</p>}
                        <div className = "video__description">
                            <p>
                                {videodetailsdata.title}
                            </p>
                            <div className = "video__options">
                                <div className = "videoviews__age">
                                    <p>{videodetailsdata.viewCount} views</p>
                                    <span> </span>
                                    <p>
                                        {videodetailsdata.publishedAt
                                            ? `${formatDistanceToNow(new Date(videodetailsdata.publishedAt))} ago`
                                            : "Date not available"}
                                    </p>
                                </div>
                                <div className = "videolikes__save">
                                    <button className = "videoDescription__buttons" onClick ={handlelike}>
                                        <FaThumbsUp size={30} color={like ? "#3b82f6" : "#ebebeb"} />
                                        <span>Like</span>
                                    </button>
                                    <button className = "videoDescription__buttons" onClick={handledislike}>
                                    <FaThumbsDown size={30} color={dislike ? "#3b82f6" : "#ebebeb"} />
                                        <span>Dislike</span>
                                    </button>
                                    <button className = "videoDescription__buttons" onClick={savevidoesfun}>
                                    <MdSave size={30} color="#ebebeb" />
                                    <span>
                                        {issaved ? "saved" : "save"}
                                    </span>
                                    </button>
                                    

                                </div>

                            </div>
                            <hr/>
                            <div className = "">

                            </div>
                        </div>
                    </div>
                    

                </div>
                
                
            
            </div>
        </>
            
    )

}
export default Videodetails