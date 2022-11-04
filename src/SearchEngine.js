import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
