import axios from "axios"
import {useEffect,useState} from "react"
import SearchBar from "./Searchbar"

function Gallery(){

const [images,setImages] = useState([])
const [filtered,setFiltered] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/gallery")
.then(res=>{

setImages(res.data)
setFiltered(res.data)

})

},[])

return(

<div>

<h2>Gallery</h2>

<SearchBar
images={images}
setFiltered={setFiltered}
/>

<div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>

{filtered.map((img,i)=>(

<img
key={i}
src={`http://localhost:5000/uploads/${img}`}
alt=""
width="160"
style={{borderRadius:"8px"}}
/>

))}

</div>

</div>

)

}

export default Gallery