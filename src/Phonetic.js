import React from "react";


export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-play"></i>
        </a>
      )}{" "}
      {props.phonetic.text &&
        props.phonetic.text.length > 0 &&
        props.phonetic.text}
    </div>
  );
}
