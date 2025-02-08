import { useState } from "react";

export const useWorlde = () => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyup = ({ key }: { key: string }) => {
    console.log(key);

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    if (key.length === 1 && /^[A-Za-z]+$/.test(key)) {
        console.log(/^[A-Za-z]+$/.test(key));
        
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return {
    currentGuess,
    handleKeyup,
  };
};
