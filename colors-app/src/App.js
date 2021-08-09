import Palette from "./Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[0])} />
    </div>
  );
}

export default App;
