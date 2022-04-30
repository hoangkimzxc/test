import "./App.css";
import { useState } from "react";

const MyButton = ({ count, onClick }) => (
  <button onClick={onClick}>Click {count} times</button>
);

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div className="avatar">
      <h1>Counter</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
