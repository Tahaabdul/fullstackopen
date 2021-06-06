import Statistic from "./Statistic";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const goodOnly = good - bad;
  const average = goodOnly / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <table>
        {all === 0 ? (
          <h4>No feedback given</h4>
        ) : (
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={`${positive}%`} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Statistics;
