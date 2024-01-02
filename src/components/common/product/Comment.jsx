import React from "react";
import img from "../../../assets/images/i1.jpeg";
import { start } from "../../../utils/icons";
const Comment = () => {
  return (
    <div className="comment">
      <div className="line1">
        <div className="name">
          <img src={img} alt="" />
          <h5>omar alghaish</h5>
        </div>
        <div className="star-container">
          {[1, 1, 1, 1, 1].map((star) => start)}
        </div>
      </div>
      <div className="line2">
        <div className="date">
          <h4>"Exptional"</h4> <p>Reviewed 23rd, November</p>
        </div>
        <div className="content">Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</div>
      </div>
    </div>
  );
};

export default Comment;
