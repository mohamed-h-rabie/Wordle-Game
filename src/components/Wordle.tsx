import { useEffect } from "react";
import { useWorlde } from "../hooks/useWordle";
import Grid from "./Grid";
type WordleProps = {
  solution: string;
};
const Wordle = ({ solution }: WordleProps) => {
  const { currentGuess, handleKeyup, isCorrect, gusses, turn } =
    useWorlde(solution);
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);
    return () => document.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  useEffect(() => {
    console.log(isCorrect, gusses, turn);
  }, [gusses, isCorrect, turn]);
  return (
    <div>
      current {solution} guess is {currentGuess}
      <Grid currentGuess={currentGuess} gusses={gusses} turn={turn} />
    </div>
  );
};

export default Wordle;
