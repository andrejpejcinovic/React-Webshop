import { useState, useEffect } from "react";
import Card from "./Card";

export default function Showcase() {
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    fetch("db.json")
      /* fetch("http://localhost:3000/products") */
      .then((res) => res.json())
      .then((arr) => setShowcase(arr))
      .catch((err) => setShowcase([]));
  }, []);

  return (
    <>
      <h2>Naši proizvodi</h2>
      <div className="row">
        {showcase.map((card) => {
          const props = { ...card, key: card.id };
          return <Card {...props} />;
        })}
      </div>
    </>
  );
}
