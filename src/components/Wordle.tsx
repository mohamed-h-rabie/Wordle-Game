import { useEffect } from "react";
import { useWorlde } from "../hooks/useWordle";
type WordleProps = {
  solution: string;
};
const Wordle = ({ solution }: WordleProps) => {
  const { currentGuess, handleKeyup } = useWorlde(solution);
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);
    return () => document.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return <div>current {solution} guess is {currentGuess}</div>;
};

export default Wordle;
