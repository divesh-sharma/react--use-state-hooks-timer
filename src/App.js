import React, { useState } from "react";
import "./style.css";

const UpdateCountExample = () => {
  let [count, setCount] = useState(0);
  const UpdateCount = () => {
    setCount(count++);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={UpdateCount}>Click Me</button>
    </div>
  );
};

const CurrentTimeExample = () => {
  let [currTime, setTime] = useState(new Date().toLocaleTimeString());
  const GetCurrentTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
      <h1>{currTime}</h1>
      <button onClick={GetCurrentTime}>Update Current Time</button>
    </div>
  );
};

const AutoTimeExample = () => {
  let [currTime, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  });
  return (
    <div>
      <h1>{currTime}</h1>
    </div>
  );
};
export default function App() {
  return AutoTimeExample();
}
