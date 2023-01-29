import { useState, useEffect } from "react";
//{imageUrl: "http://image.com"}
export const useCatIamge = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  //Pra recuperar la imagen cada vez que tenemos una cita
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join("");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);

  return {imageUrl};
};
