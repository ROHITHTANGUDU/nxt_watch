import "./index.css"
const PageNation = (props)=>{
    const {totalpages ,setPagenumber} = props
    const changepage = (page)=>{
        console.log(page)
        setPagenumber(page)
    }
    return(
        <div className = "pagenation__back" >
            <button onClick={()=>{changepage((prev) => Math.max(prev - 1, 1))}}>
                prev
            </button>
            {
                [...Array(totalpages)].map((_,index)=>{
                    return <button key ={index} className = "pagenation__number" onClick={()=>{changepage(index+1)}}>{index+1}</button>
                })
            }
             <button  onClick={()=>{changepage((prev) => Math.min(prev + 1, totalpages))}}>
               Next
            </button>
        </div>
    )
}

export default PageNation