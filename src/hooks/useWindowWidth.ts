import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(innerWidth);
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(innerWidth);
    }

    addEventListener("resize", watchWidth);

    return () => {
      removeEventListener("resize", watchWidth);
    };
  });

  return windowWidth;
}
