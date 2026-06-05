import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Messages from "./components/Messages";
import AddMessage from "./pages/AddMessage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-message" element={<AddMessage />} />
      </Routes>
    </div>
  );
}

export default App;
