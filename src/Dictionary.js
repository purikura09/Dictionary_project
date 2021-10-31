import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //alert(`${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001f20f139e2de7412289c64528e8669256";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }
  return (
    <div className="Dictionary">
      <center>
        <h1>Dictionary</h1>
        <br />
        <form onSubmit={search}>
          <input
            placeholder="Type a word"
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
      </center>
      <br />

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
