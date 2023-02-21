import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "../utilities";

export const ComponentTestAync = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState<boolean>(false);
  let url = "https://rickandmortyapi.com/api/characters/1";
  const fetchRickAndMorty = async () => {
    try {
      const response = await fetch(url)
        .then((r) => {
          if (r.status !== 200) {
            throw new Error("Error");
          }
          setError(false);
          return r;
        })
        .catch((error) => {
          setError(true);
          url = "https://rickandmortyapi.com/api/character/1";
          throw new Error(error);
        });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      throw new Error("NO ANDOO");
    }
  };

  useEffect(() => {
    fetchRickAndMorty();
    setTimeout(() => {
      fetchRickAndMorty();
    }, 4000);
  }, []);
  return (
    <ErrorBoundary
      fallBackComponent={<>No anda!</>}
      resetCondition={result}
      error={error}
    >
      {JSON.stringify(result)}
    </ErrorBoundary>
  );
};
