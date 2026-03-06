import { useState } from "react"

function SearchBar({images,setFiltered}){

const [query,setQuery] = useState("")

const search = () => {

const result = images.filter(img =>
img.toLowerCase().includes(query.toLowerCase())
)

setFiltered(result)

}

return(

<div style={{marginBottom:"20px"}}>

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Search photos..."
style={{padding:"10px",width:"250px"}}
/>

<button onClick={search}>
Search
</button>

</div>

)

}

export default SearchBar