import { useEffect, useState } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharcaters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const [url, setUrl] = useState(`https://swapi.tech/api/people`);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharcaters(data.results);
        setNext(data.next);
        setPrev(data.previous);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [url, limit]);

  if (loading) return <p>Loading..</p>;

  return (
    <div>
      {characters.map((character) => (
        <Character key={character.uid} character={character} />
      ))}
      <button
        disabled={!prev}
        onClick={(e) => {
          setUrl(prev);
        }}
      >
        Prev
      </button>
      <button
        disabled={!next}
        onClick={(e) => {
          setUrl(next);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Characters;
