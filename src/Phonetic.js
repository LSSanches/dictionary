import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-play"></i>
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
