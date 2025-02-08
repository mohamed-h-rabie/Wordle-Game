/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// type Guess = {
//   key: string;
//   color: string;
// };
export const useWorlde = (solution: any) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [historyGusses, setHistoryGusses] = useState<string[]>(["hello"]);
  //   const [gusses, setGuesses] = useState<Guess[]>([]);

  const formatWord = () => {
    console.log(`Your current Guess is ${currentGuess}`);
    const formatedSolution = [...solution];
    const foramtedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });
    foramtedGuess.forEach((l, i) => {
      if (formatedSolution[i] === l.key) {
        foramtedGuess[i].color = "green";
        formatedSolution[i] = null;
      }
    });
    foramtedGuess.forEach((l, i) => {
      if (formatedSolution.includes(l.key) && l.color !== "green") {
        foramtedGuess[i].color = "yellow";
        formatedSolution[formatedSolution.indexOf(l.key)] = null;
        console.log(formatedSolution[formatedSolution.indexOf(l.key)]);
      }
    });
    console.log(foramtedGuess, formatedSolution);
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
