import React from "react";
import "./App.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span>
        <a className="Listen" href={props.phonetic.audio} target="_blank">
          Listen
        </a>
    
        {props.phonetic.text}
      </span>
    </div>
  );
}
