import { useState } from "react";
import { ListResult } from "./components/ListResult";

export const SearchBar = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: searchText } = e.target.searchText;
    console.log(searchText);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form action="" method="get" onSubmit={handleSubmit}>
        <input type="search" name="searchText"></input>
        <button type="submit">Search</button>
      </form>
      {results.length > 0 ? <ListResult results={results} /> : <></>}
    </>
  );
};
