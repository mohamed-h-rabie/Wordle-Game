import Row from "./Row";

type Guess = {
  letter: string;
  color: string;
};
const Grid = ({
  gusses,
  currentGuess,
  turn,
}: {
  gusses: Guess[][];
  currentGuess: string;
  turn: number;
}) => {
  return (
    <>
      {gusses.map((guess, index) => {
        if (turn === index) {
          return <Row currentGuess={currentGuess} key={index} />;
        }
        return <Row guess={guess} key={index} />;
      })}
    </>
  );
};

export default Grid;
