import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";


export default function Results(props) {
  if (Results === undefined) {
    //results
  }
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                    <Phonetic phonetic={props.results.phonetics} />
                    <Meaning meaning={props.results.meanings} />
              </div>
              );
          } else {
              return null;
          } 
      }
