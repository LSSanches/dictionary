import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <em>
                <strong>Example: </strong>
                {definition.example}
              </em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
