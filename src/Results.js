import React from "react";
import "./Results.css";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return(
      <div className="Results">
      <h2 className="word">{props.results.word}</h2>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
              <Meaning meaning={meaning} />
          </div>
        );
      })}
      </div>
      );
    } else {
      return null;
  }
}