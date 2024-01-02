// QuestionsContainer.js
import React, { useState } from "react";
import { questions } from "../../../utils/data";
import Question from "./Questions";
import { qustionMarkCircle } from "../../../utils/icons";

const QuestionsContainer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questionContainer">
      <div className="icon">{qustionMarkCircle}</div>
      <div className="main-contianer" style={{ flexGrow: "1" }}>
        <div className="questions">
          {questions.map((q, index) => (
            <Question
              key={index}
              question={q.question}
              answer={q.answer}
              isOpen={index === openIndex}
              toggleAnswer={() => toggleAnswer(index)}
            />
          ))}
        </div>
        <div className="loadMore">Show 10+ more FAQ’s</div>
      </div>
    </div>
  );
};

export default QuestionsContainer;
