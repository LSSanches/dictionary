import React from "react";

import "./App.css";
import logo from "./logo.png";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <SearchEngine />
        </main>
        <br />
        <hr />
        <footer>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/laurassanches"
            target="_blank"
            rel="noopener noreferrer"
          >
            LSanches
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/LSSanches/dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionarybylaura.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
