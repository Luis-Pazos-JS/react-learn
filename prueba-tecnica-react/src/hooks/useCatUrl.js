import { useEffect, useState } from "react";
import { getFactCatUrl } from "../service/getFactCatUrl";

export const useCatUrl = ({fact}) => {

  const [img, setUrlImage] = useState();

  useEffect(() => {

    if (!fact || typeof fact !== 'string') return

    getFactCatUrl(fact).then(setUrlImage)
    
  }, [fact])

  return [img]
}