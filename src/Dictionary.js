import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //alert(`${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <center>
        <h1>Dictionary</h1>
        <br/>
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
    </div>
  );
}
