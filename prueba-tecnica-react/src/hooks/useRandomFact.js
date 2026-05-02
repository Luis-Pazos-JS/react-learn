import { useEffect, useState } from "react";
import { getFact } from "../service/getFact";

export const useFactCat = () => {
  const [fact, setFact] = useState();

  const updateFactCat = () => {
    getFact().then(setFact)
  }
  useEffect(updateFactCat, []);
  return [fact, updateFactCat]
}