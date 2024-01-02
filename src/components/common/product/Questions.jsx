// Question.js
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { questionMarkBackground } from "../../../utils/icons";

const Question = ({ question, answer, isOpen, toggleAnswer }) => {
  return (
    <div className="question">
      <div className="ask" onClick={toggleAnswer}>
        <div>
          <div className="icon">?</div>
          <p>{question}</p>
        </div>
        <div className="icon">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Question;
