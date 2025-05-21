import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export function useBreakpoint() {
  const width = useWindowWidth();
  if (width >= 1024) return "desktop";
  if (width >= 768) return "tablet";
  return "mobile";
}