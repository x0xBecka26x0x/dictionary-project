import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definition}</p>
            <br />
            <em><p>{props.meaning.synonyms}</p></em>
        </div>
    );
}




//  <p>{props.meaning.definition}</p>
//<p>{props.meaning.definition.example}</p>

//setResults(response.data.meanings[0].definition)