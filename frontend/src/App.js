import Upload from "./components/upload";
import Gallery from "./components/gallery";
import ChatWidget from "./components/ChatWidget";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">Drishyamitra AI Photo Manager</h1>
      </header>
      <main className="container">
        <div className="section upload-section">
          <Upload />
        </div>
        <div className="section gallery-section">
          <Gallery />
        </div>
      </main>
      <div className="chat-widget-container">
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;
