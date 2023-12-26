import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCard({ question, answer, isClicked, id, onClicked }) {
  function handleCardClick() {
    if (isClicked) {
      onClicked(-1);
    } else {
      onClicked(id);
    }
  }

  return (
    <div onClick={handleCardClick} className={isClicked ? "selected" : ""}>
      {isClicked ? answer : question}
    </div>
  );
}

function FlashCards({ questions }) {
  const [clickedId, setClickedId] = useState();

  if (!questions) {
    return <div></div>;
  }

  return (
    <div className="flashcards">
      {questions.map((question) => {
        return (
          <FlashCard
            question={question.question}
            answer={question.answer}
            isClicked={clickedId === question.id}
            onClicked={setClickedId}
            id={question.id}
          ></FlashCard>
        );
      })}
    </div>
  );
}
