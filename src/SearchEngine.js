import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  let [word, setWord] = useState(props.default);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f91700001000001d6f7dc14737f427c8e7b491222b71c9c`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="SearchEngine">
        <h1>What word do you want to look up?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className="field"
              type="search"
              placeholder="Type here"
              onChange={handleKeyword}
              defaultValue={props.default}
            />
          </form>

          <div className="hint">suggested words: sunset, yoga, forest.. </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
