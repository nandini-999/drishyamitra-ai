import { useState } from "react"
import axios from "axios"
import { FaRobot } from "react-icons/fa"
import "./ChatWidget.css"

function ChatWidget(){

const [open,setOpen] = useState(false)
const [query,setQuery] = useState("")
const [messages,setMessages] = useState([])
const [loading,setLoading] = useState(false)

const sendQuery = async () => {

if(!query) return

const userMessage = {type:"user",text:query}

setMessages(prev => [...prev,userMessage])
setQuery("")
setLoading(true)

try{

const res = await axios.post(
"http://localhost:5000/chat",
{query:query}
)

if(res.data.action === "gallery"){

setMessages(prev => [
...prev,
{type:"bot",text:"Showing your gallery above 👆"}
])

}
else{

setMessages(prev => [
...prev,
{type:"bot",text:res.data.response}
])

}
const botMessage = {type:"bot",text:res.data.response}

setMessages(prev => [...prev,botMessage])

}catch{

setMessages(prev => [...prev,{type:"bot",text:"Server error"}])

}

setLoading(false)

}

return(

<>

{/* Floating Button */}

<div className="chat-button"
onClick={()=>setOpen(!open)}
>
<FaRobot/>
</div>

{/* Chat Window */}

{open && (

<div className="chat-window">

<div className="chat-header">
AI Assistant
</div>

<div className="chat-body">

{messages.map((msg,i)=>(

<div
key={i}
className={
msg.type === "user"
? "message user"
: "message bot"
}
>

{msg.text}

</div>

))}

{loading && (
<div className="message bot">
Typing...
</div>
)}

</div>

<div className="chat-input">

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Ask something..."
/>

<button onClick={sendQuery}>
Send
</button>

</div>

</div>

)}

</>

)

}

export default ChatWidget