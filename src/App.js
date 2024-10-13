import React from 'react';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="logo">My Search Engine!!</h1>
            <main>
              <Dictionary defaultKeyword="sunset" />
            </main>
        </header>
        <footer className="App-footer">
            This project was coded by{" "}
          <a href="https://github.com/x0xBecka26x0x" target="_blank" rel="noreferrer"> Rebecca Thombs</a>{" "}
            is open-sourced on{" "}
          <a href="https://github.com/x0xBecka26x0x/Weather-Application" target="_blank" rel="noreferrer"> Github</a>{" "} 
            and hosted on{" "}<a href="#" target="_blank" rel="noreferrer"> Netlify! </a>
        </footer>
      </div>
    </div>
  );
}




