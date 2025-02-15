import { useEffect, useState } from "react";
import { useWorlde } from "../hooks/useWordle";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

type WordleProps = {
  solution: string;
};
const Wordle = ({ solution }: WordleProps) => {
  const { currentGuess, handleKeyup, isCorrect, gusses, turn, usedKeys } =
    useWorlde(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 4) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);
  return (
    <div>
      {/* current {solution} guess is {currentGuess} */}
      <Grid currentGuess={currentGuess} gusses={gusses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
};

export default Wordle;
