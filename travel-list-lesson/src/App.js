import React, { useState } from "react";

var itemList = [{ quantity: 1, description: "socks", packed: true }];
export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {itemList.map((item) => (
          <Item key={item.description} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span
        key={item.description}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    //item generation goes here
    setDescription("");
    setCount(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🤔</h3>
      <select value={count} onSelect={(e) => setCount(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            num
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Stats() {
  return (
    <footer>💼 You have X items on your list, and you already packed X</footer>
  );
}

function Logo() {
  return <h1>🌴 Far Away 📻</h1>;
}
