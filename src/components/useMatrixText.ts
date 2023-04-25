import { useState, useEffect } from "react";

interface UseMatrixTextOptions {
  targetText: string;
  intervalSpeed?: number;
  delay?: number;
}

const useMatrixText = ({
  targetText,
  intervalSpeed = 100,
  delay = 0,
}: UseMatrixTextOptions): string => {
  const [letters, setLetters] = useState("");
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    let index = 0;
    let _letter = "";
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < targetText.length) {
          _letter = _letter + targetText.charAt(index);
          setLetters(_letter);
          index++;
        } else {
          clearInterval(interval);
          clearInterval(cursorInterval);
          setCursor(false);
        }
      }, intervalSpeed);

      const cursorInterval = setInterval(() => {
        setCursor((prevCursor) => !prevCursor);
      }, 500);
      return () => {
        clearInterval(interval);
        clearInterval(cursorInterval);
      };
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [targetText, intervalSpeed, delay]);

  return letters + (cursor ? "|" : "");
};

export default useMatrixText;
