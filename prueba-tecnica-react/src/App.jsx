// @ts-nocheck
import "./style.css";
import { useCatUrl } from "./hooks/useCatUrl";
import { useFactCat } from "./hooks/useRandomFact";

export const App = () => {
  const [fact, updateFactCat] = useFactCat();
  const [img] = useCatUrl({ fact });

  const handleClick = () => {
    updateFactCat();
  };

  return (
    <main>
      <h1>App de prueba tecnica</h1>
      <h2>Fact On Cat</h2>
      <button onClick={handleClick}>get fact</button>
      {fact && <p>{fact}</p>}
      {img && (
        <img src={img} alt="image cat descriptions fristworld fast"></img>
      )}
    </main>
  );
};
