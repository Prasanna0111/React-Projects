import { useState } from "react";

export default function ToDo() {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAddItem = (text: string) => {
    if (!text.trim()) {
      setError("Empty text cannot be added");
      return;
    }
    setItems((prev) => [...prev, text]);
    setError("");
    setText("");
  };

  const handleDelete = (idx: number) => {
    setItems((prev) => prev.filter((i, index) => index !== idx));
  };

  return (
    <div className="container">
      <h1>To Do</h1>
      <input
        type="text"
        placeholder="Enter the Item to add"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {error && <p>{error}</p>}
      <button onClick={() => handleAddItem(text)}>Add</button>
      {items.map((item, index) => (
        <div key={index}>
          {index + 1}. {item}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
