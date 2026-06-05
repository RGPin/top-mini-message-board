import { Link, Route, Routes } from "react-router";
import App from "../App";
import AddMessage from "../pages/AddMessage";
import Home from "../pages/Home";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <Link to="/">✉️ Mini Messageboard</Link>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-message" className="nav-link">
              Add Message
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
