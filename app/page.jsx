'use client';
import { useEffect, useState } from "react";
import HeaderComponent from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import useFetch from "./customHooks/useFetch";
import { getRandomQuotes } from "./serverActions/actions";

export default function Home() {

  const [results, setResults] = useState([]);
  
  const handleInitialRandomFetch = (data) => {
    setResults(data);
  }

  const initalRadomFetch = useFetch(handleInitialRandomFetch);

  
  useEffect(() => {
    initalRadomFetch(() => getRandomQuotes(3));
  }, []);

  const handleFetch = (results) => {
    setResults(results);
  }

  return (
    <>
      <HeaderComponent fetchSearchCallback={handleFetch} randomCallback={handleFetch} />
      <MainSection results={results} />
    </>
  );
}