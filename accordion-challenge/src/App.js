import "./styles.css";
import React, { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const itemList = [];
  for (let i = 0; i < faqs.length; i++) {
    itemList.push(faqs[i]);
    itemList[i] = { ...itemList[i], id: i, cliked: false };
  }

  return (
    <div>
      <Accordion items={itemList} />
    </div>
  );
}

function AccordionItem({ title, text, id }) {
  const [isClicked, setClicked] = useState(false);

  if (!isClicked) {
    return (
      <div className="item" onClick={() => setClicked((click) => !click)}>
        <p className="number">{id}</p> <p className="title">{title}</p>
        <p className="icon">+</p>
      </div>
    );
  }

  return (
    <div className="item open" onClick={() => setClicked((click) => !click)}>
      <p className="number">{id}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
}

function Accordion({ items }) {
  console.log(items);
  return (
    <div className="accordion">
      <ul>
        {items.map((faq) => (
          <AccordionItem
            title={faq.title}
            text={faq.text}
            key={faq.id}
            id={faq.id}
          ></AccordionItem>
        ))}
      </ul>
    </div>
  );
}
