import { Link } from "react-router";

export default function Message({ message }) {
  return (
    <article className="message-card">
      <div className="message-content">
        <p className="message-text">{message.text}</p>
      </div>

      <div className="message-actions">
        <Link to={`/details/${message.id}`} className="btn btn-secondary">
          View details
        </Link>

        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>

      <footer className="message-meta">
        <span className="message-author">Posted by {message.username}</span>
        <time className="message-date" dateTime={message.added}>
          {new Date(message.added).toLocaleDateString()}
        </time>
      </footer>
    </article>
  );
}
