import { useState } from "react";
import "./../styles/counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>{count}</p>
      <div className="buttons">
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => (prev !== 0 ? prev - 1 : 0))}>
          -
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
