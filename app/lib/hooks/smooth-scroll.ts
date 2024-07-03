import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);

    if (element)
      element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return scrollTo;
};

export default useSmoothScroll;
