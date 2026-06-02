export default function Message({ message }) {
  return (
    <article className="message-card">
      <div className="message-content">
        <p className="message-text">{message.text}</p>
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
