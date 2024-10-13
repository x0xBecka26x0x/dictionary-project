import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data)
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
      setLoaded(true);
      search();
    }

    if (loaded){
    return (
        <div className="Dictionary">
            <h1>What word are you looking up?</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="search" 
                        onChange={handleKeywordChange}
                        defaultValue={props.defaultKeyword}
                        />
                </form>
                <div className="hint">
                    suggested words: sunset, drinks, yoga, plants...
                </div>
            </section>
                <Results results={results} />
        </div>
    );
} else {
  load();
  return "Loading";
}
}