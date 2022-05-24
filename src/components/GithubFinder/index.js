import { useEffect, useState } from 'react';
import Header from '../../layouts/Header';
import SearchPage from '../../pages/SearchPage';
import HomePage from '../../pages/HomePage';

const GithubFinder = () => {
  const [query, setQuery] = useState("");

  const onChangeHandler = (input) => {
    setQuery(input);
  }

  if (query !== "") return (
    <>
      <Header onChangeHandler={onChangeHandler} query={query} />
      <SearchPage query={query} />
    </>
  )
  return (
    <>
      <Header onChangeHandler={onChangeHandler} query={query} />
      <HomePage />
    </>
  );
}

export default GithubFinder;
