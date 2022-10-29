import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

// const ENDPOINT = 'http://localhost:4500/';
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
