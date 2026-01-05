import { useState } from "react";
import "./../styles/counter.css";

export default function ShowHide() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="container">
      {isShowing && <p> Hello, React!</p>}
      <button onClick={() => setIsShowing((prev) => !prev)}>
        {isShowing ? "Hide" : "Show"}
      </button>{" "}
    </div>
  );
}
