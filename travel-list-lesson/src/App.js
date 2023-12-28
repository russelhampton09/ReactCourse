import React, { useState } from "react";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { Logo } from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(id) {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
        items={items}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
