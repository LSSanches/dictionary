import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setWord(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input type="search" placeholder="Type here" onChange={handleKeyword} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
