import Header from "./components/Header";
import Messages from "./components/Messages";
import AddMessage from "./pages/AddMessage";

function App() {
  return (
    <div className="app">
      <Header />
      <Messages />
      <AddMessage />
    </div>
  );
}

export default App;
