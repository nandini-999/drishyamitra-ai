import axios from "axios"
import {useState} from "react"

function Upload(){

const [file,setFile] = useState(null)

const upload = async () => {

if(!file){
alert("Select image")
return
}

const formData = new FormData()

formData.append("image",file)

await axios.post(
"http://localhost:5000/upload",
formData
)

alert("Photo Uploaded")

}

return(

<div>

<h2>Upload Photo</h2>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<button onClick={upload}>
Upload Photo
</button>

</div>

)

}

export default Upload