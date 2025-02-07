import { createContext,useState } from "react";



export const SavedVideosContext = createContext({
    savedvideos :[],
    savedvideosfunction :()=>{}
});

export const SavedVidoesProvider = ({children})=>{
    const [savedvideos,setSavedvideos] = useState([])

    const savedvideosfunction=(data)=>{
        setSavedvideos((prev)=>{
            if (prev.some((video) => video.id === data.id)) {
                // Remove if already saved
                return prev.filter((video) => video.id !== data.id);
            }
            else{
                console.log(prev)
                return [...prev,data]
                //Add video object to savedvideos
            }
        })

    }
 
    return(
        <SavedVideosContext.Provider value={{savedvideos,savedvideosfunction}}>
            {children}
        </SavedVideosContext.Provider>
    )

}







