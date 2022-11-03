import "./App.css";
import logo from "./logo.png";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
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
            rel="noreferrer"
          >
            LSanches
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/LSSanches/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionarybylaura.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
