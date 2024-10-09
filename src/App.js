import React from 'react';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="logo">She Codes Logo!!</h1>
            <main>
              <Dictionary />
            </main>
        </header>
        <footer className="App-footer">
          Coded by Rebecca Thombs
        </footer>
      </div>
    </div>
  );
}
