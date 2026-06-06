import { Link, Route, Routes } from "react-router";
import App from "../App";
import AddMessage from "../pages/AddMessage";
import Home from "../pages/Home";
import HomeIcon from "./icons/HomeIcon";
import AddMessageIcon from "./icons/AddMessageIcon";
import MessageIcon from "./icons/MessageIcon";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <Link to="/">
          <h1 className="header-title">
            <span className="header-title-icon">
              <MessageIcon />
            </span>{" "}
            <span className="header-title-text">Mini Messageboard</span>
          </h1>
        </Link>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="link-icon">
                <HomeIcon />
              </span>
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-message" className="nav-link">
              <span className="link-icon">
                <AddMessageIcon />
              </span>
              <span className="link-text">Add Message</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
