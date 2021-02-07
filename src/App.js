import React, { useState } from "react";
import data from "./data";

function App() {
  let [number, setNumber] = useState(0);
  let [text, setText] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    let count = parseInt(number);
    if (count <= 0) {
      count = 1;
    }
    if (count > 8) {
      count = 8;
    }
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum??</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
