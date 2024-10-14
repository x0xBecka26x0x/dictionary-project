import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(" ");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data)
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
            <h1>What word are you looking up?</h1>
                <form onSubmit={search}>
                    <input 
                        type="search" 
                        onChange={handleKeywordChange}
                        />
                </form>
                <div className="hint">
                    suggested words: sunset, drinks, yoga, plants...
                </div>
            </section>
                <Results results={results} />
        </div>
    );
}