import React, { useState, useEffect } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true`;

const App = () => {
  const [fact, setFact] = useState()

  // useEffect(() => {
  //   const getRamdomFact = async () => {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const json = await res.json()
  //     setFact(json.fact)
  //   }
  //   getRamdomFact()
  // }, [])

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        fact ? setFact(fact) : ''
      })

    const firstWord = fact.split(' ')
    console.log(firstWord)
  }, [])

  return (
    <main>
      <h2>{fact}</h2>
    </main>
  )
}

export default App
