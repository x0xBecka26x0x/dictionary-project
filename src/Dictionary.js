import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(" ");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleImagesResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get(photoApiUrl).then(handleImagesResponse);
    }

//SHECODES DICTIONARY API
//https://api.shecodes.io/dictionary/v1/define?word=love&key=bf8f1010b3c486eaa378at4e5eo24f84


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
                <Photos photos={photos} />
        </div>
    );
}