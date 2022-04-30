import "./App.css";
import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return <button onClick={handleClick}>Clicked {count} times</button>;
};

export default function App() {
  return (
    <div className="avatar">
      <h1>Counter</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
