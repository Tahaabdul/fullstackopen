import { useState } from "react";
import Statistics from "./Statistics";

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
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={plus}>good</button>
      <button onClick={neu}>neutral</button>
      <button onClick={neg}>bad</button>
      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
