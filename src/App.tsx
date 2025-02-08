import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
type Solutions = {
  id: number;
  word: string;
};

const App = () => {
  const [solution, setSolution] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/solutions")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const randomsolution: Solutions =
          json[Math.floor(Math.random() * json.length)];
        setSolution(`${randomsolution.word}`);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Rabie)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

export default App;
