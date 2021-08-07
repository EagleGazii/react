import logo from './logo.svg';
import './App.css';
import Loto from './Loto/Loto'

function App() {
  return (
    <div className="App">

      <Loto maxNumber={30} title={"Loto"} maxBall={5} />
      <Loto maxNumber={10} title={"Mini Loto"} maxBall={3} />
    </div>
  );
}

export default App;
