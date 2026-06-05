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
      <h1>Add a message</h1>

      {error && <p className="error-msg">Error: {error}</p>}

      <form onSubmit={submitForm}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Enter your message:
          <textarea
            name="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
