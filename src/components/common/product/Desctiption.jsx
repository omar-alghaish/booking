import React from "react";
import DiscriptionHeader from "./DiscriptionHeader";
import Swap from "./Swap";
import CommentsContainer from "./CommentsContainer";
import Advandge from "./Advandge";
import Questions from "./Questions"
import { questions } from "../../../utils/data";
import QuestionsContainer from "./QuestionsContainer";
const Desctiption = () => {
  return (
    <div className="discription-container">
      <DiscriptionHeader />
      <Swap />
            <Advandge />

      <CommentsContainer />
   <QuestionsContainer />
    </div>
  );
};

export default Desctiption;
