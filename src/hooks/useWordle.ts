import { useState } from "react";

export const useWorlde = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [historyGusses, setHistoryGusses] = useState<string[]>(["hello"]);

  const formatWord = () => {
    console.log(`Your current Guess is ${currentGuess}`);
  };
  const handleKeyup = ({ key }: { key: string }) => {

    if (key === "Enter") {
      setTurn((prev) => prev + 1);
      setCurrentGuess("");
      if (turn >= 5) {
        console.log("You Have Reached to limit Attempets");
        return;
      }
      if (historyGusses.includes(currentGuess)) {
        console.log("You use this word before");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("your word shorter than 5 letters");
      }
      formatWord();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    if (key.length === 1 && /^[A-Za-z]+$/.test(key)) {
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
