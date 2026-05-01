import { useEffect, useState } from "react";
import "./style.css";
const URL_CAT_FACT = "https://catfact.ninja/fact";
//const URL_FRISTWORLD_CAT = `https://cataas.com/cat/says/${fristWorld}?fontSize=50&fontColor=red`
export const App = () => {
  const [fact, setFact] = useState("this is de fact on cat");

  useEffect(() => {
    fetch(URL_CAT_FACT)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFact(data.fact);
        const fristWorld = data.fact.split(" ");
        
  }, []);

    useEffect((fristWorld) => {

      fetch(
          `https://cataas.com/cat/says/${fristWorld}?fontSize=50&fontColor=red`,
        )
          .then((res) => res.json())
          .then((res) => {});
      });
}, [fact]) 

  return (
    <main>
      <h1>App de prueba tecnica</h1>
      <h2>check</h2>
        <p>{fact}</p>
        <img src="" alt="image cat descriptions fristworld fast"></img>
    </main>
  );
};
