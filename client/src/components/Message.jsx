import { Link } from "react-router";

export default function Message({ message, setMessages }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/delete/${message.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        alert("Deleted successfully");
        setMessages((prev) => prev.filter((msg) => msg.id !== message.id));
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <article className="message-card">
      <div className="message-content">
        <p className="message-text">{message.text}</p>
      </div>

      <div className="message-actions">
        <Link to={`/details/${message.id}`} className="btn btn-secondary">
          View details
        </Link>

        <button type="button" className="btn btn-danger" onClick={handleDelete}>
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
