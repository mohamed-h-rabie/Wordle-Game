/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

type Letters = {
  key: string;
}[];
const Keyboard = ({ usedKeys }:any) => {
  const [letters, setLetters] = useState<Letters>([]);
  useEffect(() => {
    fetch("http://localhost:3000/letters")
      .then((res) => res.json())
      .then((data) => setLetters(data));
  }, []);
  console.log(usedKeys);

  return (
    <div className="keyboard">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keyboard;
