/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
type Guess = {
  letter: string;
  color: string;
};
export const useWorlde = (solution: any) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [historyGusses, setHistoryGusses] = useState<string[]>([]);
  const [gusses, setGuesses] = useState<Guess[][]>(
    [...Array(5)].map(() => Array(5).fill({ letter: "", color: "" }))
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const formatWord = () => {
    console.log(`Your current Guess is ${currentGuess}`);
    const formatedSolution = [...solution];
    const formatedGuess = [...currentGuess].map((letter) => {
      return { letter, color: "grey" };
    });

    formatedGuess.forEach((letter, index) => {
      if (letter.letter === formatedSolution[index]) {
        letter.color = "green";
        formatedSolution[index] = null;
      }
    });
    formatedGuess.forEach((letter) => {
      if (
        formatedSolution.includes(letter.letter) &&
        letter.color !== "greeen"
      ) {
        letter.color = "yellow";
        formatedSolution[formatedSolution.indexOf(letter.letter)] = null;
      }
    });

    return formatedGuess;
  };
  const addNewGuesses = (formatedGuess: Guess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = formatedGuess;
      return newGuesses;
    });
    setHistoryGusses((prev) => [...prev, currentGuess]);
    setTurn((prev) => prev + 1);
    setCurrentGuess("");
  };
  const handleKeyup = ({ key }: { key: string }) => {
    if (key === "Enter") {
      // setTurn((prev) => prev + 1);
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
      const foramted = formatWord();
      addNewGuesses(foramted);
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
    gusses,
    isCorrect,
    turn,
  };
};
