import React, { useState, useEffect } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true`;
const CAT_PREFIX_iMAGE_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // useEffect(() => {
  //   const getRamdomFact = async () => {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const json = await res.json()
  //     setFact(json.fact)
  //   }
  //   getRamdomFact()
  // }, [])

  //TYPE ONE
  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { fact } = data
  //       setFact(fact)

  //       // const firstWord = fact.split(' ').slice(0, 3).join(' ')
  //       const threeFirstWords = fact.split(' ', 3).join('')
  //       console.log(threeFirstWords)

  //       fetch(
  //         `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`,
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           const { url } = data
  //           setImageUrl(url)
  //         })
  //     })
  // }, [])

  //TYPE TWO
  //Para recupear la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      // .then((res) => {
      //   if (!res.ok) throw new Error('Error fetching fact')
      //   return res.json()
      // })
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
    // .catch((err) => {
    //   //Tanto si hay una respuesta
    //   //si hay un error con la peticion
    // })
  }, [])

  //Para recuperar la iamagen cada vez que tenemos una nueva cita
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join('')

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`,
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  const handleClick = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }

  return (
    <main>
      <h1>App de gatos</h1>

      <button onClick={() => handleClick()}>Get new fact</button>

      <h2>{fact}</h2>
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_iMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}

export default App
