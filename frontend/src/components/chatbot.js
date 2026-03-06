import axios from "axios"
import {useState} from "react"

function Chatbot(){

const [query,setQuery] = useState("")
const [messages,setMessages] = useState([])

const sendQuery = async () => {

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

<h2>AI Chatbot</h2>

<div>

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
/>

<button onClick={sendQuery}>
Send
</button>

</div>

)

}

export default Chatbot