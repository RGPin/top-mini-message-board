import { useEffect, useState } from "react";
import Message from "./Message";
import { Link } from "react-router";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = async (signal) => {
    try {
      setLoading(true);
      const response = await fetch("/api", { signal });
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchMessages(signal);
    return () => controller.abort();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
