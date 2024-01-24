import React from "react";

import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>

        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          This Websited Is Coded By{" "}
          <a
            href="https://www.linkedin.com/in/nino-antadze/"
            target="_blank"
            rel="noreferrer"
          >
            Ninia
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/niniantadze/react-dictionary-by-ninia"
            target="_blank"
            rel="noreferrer"
          >
            Github!
          </a>
        </footer>
      </div>
    </div>
  );
}
