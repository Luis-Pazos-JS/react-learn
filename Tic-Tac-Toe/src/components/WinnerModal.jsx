import { WINNER } from "../data/Const.js";
import { Square } from "./Square.jsx";

export function WinnerModal({winner, resetGame}) {
   if (!winner) return null;

   const winnerText = winner === WINNER.TIE ? "Empate" : `Gano:`
   return (
   <section className="winner">
      <div className="text">
         <h2>{winnerText}</h2>
            <header className="win">
               {winner && <Square>{winner}</Square>}
            </header>
         <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
         </footer>
      </div>
      </section>
   )
}