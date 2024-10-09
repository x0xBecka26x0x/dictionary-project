import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meanings);
        return (
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <br />
                <strong>Definition: </strong> {props.meaning.definition}
                <br />
                <br />
                <strong>Example: </strong> <em>{props.meaning.example}</em>
                <br />
                <br />
                <strong>Synonyms: </strong>
                <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
     }



        //  <p>{props.meaning.definition}</p>
        //<p>{props.meaning.definition.example}</p>
        //setResults(response.data.meanings[0].definition)