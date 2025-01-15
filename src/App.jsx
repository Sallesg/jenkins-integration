import Button from "./Button/Button";
import { calculateSum } from "./utils/calculateSum";

function App() {
  return (
    <div>
      <h1>Vite React</h1>
      <Button onClick={() => calculateSum(2, 3)}>Click Me</Button>
    </div>
  );
}

export default App;
