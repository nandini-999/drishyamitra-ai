import Upload from "./components/upload"
import Gallery from "./components/gallery"
import ChatWidget from "./components/ChatWidget"
import "./App.css"

function App(){

return(

<div className="app">

<h1 className="title">
Drishyamitra AI Photo Manager
</h1>

<div className="container">

<div className="section">
<Upload/>
</div>

<div className="section">
<Gallery/>
</div>

</div>

<ChatWidget/>

</div>

)

}

export default App