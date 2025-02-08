import { useEffect, useState } from "react";
type Solutions = {
  id: number;
  word: string;
};

const App = () => {
  const [solution, setSolution] = useState<Solutions | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/solutions")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const randomsolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomsolution);
      });
  }, [setSolution]);

  return <div>{solution && solution.word}</div>;
};

export default App;
