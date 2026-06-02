import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async (signal) => {
    try {
      const data = await fetch();
    } catch (error) {
      console.error(errror);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchMessages(signal);
    return () => controller.abort();
  });
  return <ul></ul>;
}
