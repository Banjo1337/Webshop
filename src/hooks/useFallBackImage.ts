import lostMoth from "../assets/lost_moth.png";
import { useEffect, useState } from "react";

export default function useFallBackImage(url: string) {
  const [validUrl, setValidUrl] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setValidUrl(true);
    };
    img.onerror = () => {
      setValidUrl(false);
    };
    img.src = url;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  });

  return validUrl ? url : lostMoth;
}
