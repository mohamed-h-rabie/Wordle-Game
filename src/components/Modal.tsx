/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Modal({ isCorrect, solution, turn }: any) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && turn === 5 && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
}
