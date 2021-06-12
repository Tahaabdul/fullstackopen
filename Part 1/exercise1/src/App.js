import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      { name: "State of a component", exercises: 14 },
    ],
  };
  const parts = course.parts;
  // const t = [1, 2, 3, 4, 5];
  // const [first, second, ...rest] = t;

  // console.log(`first: ${first}, second: ${second}, rest: ${rest}`);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
