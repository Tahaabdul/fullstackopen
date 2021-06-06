import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const plus = () => {
    setGood(good + 1);
  };
  const neg = () => {
    setBad(bad + 1);
  };
  const neu = () => {
    setNeutral(neutral + 1);
  };
  const all = good + bad + neutral;
  const goodOnly = good - bad;
  const average = goodOnly / all;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={plus}>good</button>
      <button onClick={neu}>neutral</button>
      <button onClick={neg}>bad</button>

      <h1>statistics</h1>
      <h4>good {good}</h4>
      <h4>neutral {neutral}</h4>
      <h4>bad {bad}</h4>
      <h4>all {bad + neutral + good}</h4>
      <h4>average {average}</h4>
      <h4>positive {(good / all) * 100}%</h4>
    </div>
  );
};

export default App;
