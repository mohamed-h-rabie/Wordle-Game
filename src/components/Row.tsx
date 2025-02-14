type Guess = {
  letter: string;
  color: string;
};
const Row = ({
  guess,
  currentGuess,
}: {
  guess?: Guess[];
  currentGuess?: string;
}) => {
  if (guess) {
    return (
      <div className="word-box">
        {guess.map((letter, index) => {
          return (
            <div className={letter.color} key={index}>
              {letter.letter}
            </div>
          );
        })}
      </div>
    );
  }
  if (currentGuess) {
    const currentGuessArr = [...currentGuess];
    return (
      <div className="word-box">
        {currentGuessArr.map((letter, index) => {
          return <div key={index}>{letter}</div>;
        })}
        {[...Array(5 - currentGuessArr.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="word-box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
