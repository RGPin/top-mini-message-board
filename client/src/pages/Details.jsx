import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDetails = async (signal) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/details/${id}`, { signal });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const data = await response.json();
      console.log(data);
      setDetails(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error in fetchDetails", { error });
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchDetails(controller.signal);
    return () => controller.abort();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <main className="details-page">
      <Link to="/" className="back-link">
        ← Back to Messages
      </Link>

      <article className="details-card">
        <header className="details-header">
          <span className="message-id">Message #{id}</span>
          <span className="details-author">
            Posted by: <strong>{details?.username}</strong>
          </span>
        </header>

        <div className="details-body">
          <p className="details-text">{details?.text}</p>
        </div>

        <footer className="details-footer">
          {details?.added && (
            <time dateTime={details.added}>
              {new Date(details.added).toLocaleString()}
            </time>
          )}
        </footer>
      </article>
    </main>
  );
}
