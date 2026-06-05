import { Route, Routes } from "react-router";
import Messages from "../components/Messages";

function Home() {
  return (
    <div className="home">
      <Messages />
    </div>
  );
}

export default Home;
