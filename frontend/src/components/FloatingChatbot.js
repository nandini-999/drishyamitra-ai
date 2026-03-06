import { useState } from "react"
import axios from "axios"
import { FaRobot } from "react-icons/fa"

function FloatingChatbot(){

const [open,setOpen] = useState(false)
const [query,setQuery] = useState("")
const [messages,setMessages] = useState([])

const sendQuery = async () => {

if(!query) return

const res = await axios.post(
"http://localhost:5000/chat",
{query:query}
)

setMessages([
...messages,
{user:query,bot:res.data.response}
])

setQuery("")

}

return(

<div>

{/* Chat Icon */}

<div
onClick={()=>setOpen(!open)}
style={{
position:"fixed",
bottom:"20px",
right:"20px",
background:"#007bff",
color:"white",
width:"60px",
height:"60px",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"25px",
cursor:"pointer",
boxShadow:"0 4px 10px rgba(0,0,0,0.3)"
}}
>
<FaRobot/>
</div>

{/* Chat Window */}

{open && (

<div
style={{
position:"fixed",
bottom:"90px",
right:"20px",
width:"300px",
background:"white",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.3)",
padding:"15px"
}}
>

<h3>AI Chatbot</h3>

<div style={{maxHeight:"200px",overflowY:"auto"}}>

{messages.map((msg,i)=>(
<div key={i}>
<p><b>You:</b> {msg.user}</p>
<p><b>AI:</b> {msg.bot}</p>
</div>
))}

</div>

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Ask something..."
style={{width:"70%"}}
/>

<button onClick={sendQuery}>
Send
</button>

</div>

)}

</div>

)

}

export default FloatingChatbot