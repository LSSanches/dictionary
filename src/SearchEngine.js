import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
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
