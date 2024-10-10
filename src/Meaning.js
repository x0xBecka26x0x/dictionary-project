import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
        return (
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <strong>Definition: </strong>
                <p>{props.meaning.definition}</p>
                <br />
                <strong>Example: </strong>
                <p><em>{props.meaning.definition.example}</em></p>
                <strong>Synonyms: </strong>
                <p>{props.meaning.definition.synonyms}</p>
          </div>
        );
     }
