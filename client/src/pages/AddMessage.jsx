import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddMessage() {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, text }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      setUsername("");
      setText("");
      alert("Message posted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error in submitForm", { error });
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add a message</h1>

      {error && (
        <div className="form-error" role="alert">
          <p className="form-error-text">Error: {error}</p>
        </div>
      )}

      {loading && (
        <div className="form-loading">
          <p className="form-loading-text">Sending...</p>
        </div>
      )}

      <form onSubmit={submitForm} className="message-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="e.g., janesmith"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="text" className="form-label">
            Enter your message
          </label>
          <textarea
            id="text"
            name="text"
            className="form-textarea"
            placeholder="Type your message here..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
