import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <ul className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3> 
            <p>
              <strong>Definition:</strong> {props.meaning.definition}
              <br />
              <br />
              <strong>Example:</strong> <em>{props.meaning.definition.example}</em>
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </ul>
        );
      }