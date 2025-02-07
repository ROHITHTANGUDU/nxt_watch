import "./index.css"
import Header from "../Header"
import Sidebar from "../Sidebar"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import VideoCard from "../Videocard"
import PageNation from "../PageNation"
const Home = ()=>{
    const [videos,setVideos] = useState([])
    const [pagenumber , setPagenumber] = useState(1)
    const [totalpages , setTotalpages] = useState(0)
    const [searchtempval , setSearchtempvalue] = useState("")
    const [searchval , setSearchvalue] = useState("")
   
    const postsperpage = 4
    useEffect(()=>{
        fetchproducts()
    },[searchval])

    const first = (pagenumber * postsperpage) - postsperpage
    const last = pagenumber * postsperpage
    


    const fetchproducts = async ()=>{
        const token = Cookies.get("jwt_token_nxt_watch_login")
        const obj = {
            method: "GET",
            headers :{
                Authorization : `Bearer ${token}  `
            }
        }
        try
        {
            const fetchapi = await fetch(`https://apis.ccbp.in/videos/all?search=${searchval}`, obj)
            console.log(fetchapi)
            if(fetchapi.ok){
                
                const response = await fetchapi.json()
                console.log(response) 
                setVideos(response.videos)
                setTotalpages(response.total/postsperpage)
            }
            else{
                console.log(fetchapi.status)
            }
        }catch(e){
            console.log(e)

        }
    }

    const  searchfun = (event)=>{
        setSearchtempvalue(event.target.value)
    }

    const searchbutton = (event)=>{
        setSearchvalue(searchtempval)


    }

    return(
        <>
            <Header/>
            <div className = "home-background">
                <Sidebar />
                <div className = "home-right">
                    <div className="home-banner">
                    </div>
                    <div>
                        <input type="search" placeholder="search" onChange={searchfun}/>
                        <button onClick={searchbutton}>
                            Search
                        </button>
                        <ul className="home-videos">
                            {/* {videos.slice(first,last).map((each)=>{
                                return <VideoCard key ={each.id} video = {each}/>

                            })} if page nation was there */}
                            {videos.map((each)=>{
                                return <VideoCard key ={each.id} video = {each}/>

                            })}
                         </ul>
                    {/* <PageNation totalpages = {totalpages} setPagenumber ={setPagenumber}/> */}

                    </div>
                   
                </div>    
            </div>
        </>
        
    )
}

export default Home