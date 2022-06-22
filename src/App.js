import "./App.css";
import Homepage from "./components/Homepage";
import GamePage from "./components/GamePage";
import Flames from "./Games/Flames/Flames";
import { Route, Routes } from "react-router-dom";
import Tictactoe from "./Games/TicTacToe/Tictactoe";
import Snakebite from "./Games/SnakeBite/Snakebite";
import Sudoku from "./Games/Sudoku/Sudoku";
import Connectlines from "./Games/ConnectLines/Connectlines";
import Blocksmasher from "./Games/BlockSmasher/Blocksmasher";
function App() {
  // const paths = "/";
  return (
    <div className="App">
      {/* <Homepage className="homepage"></Homepage> */}
      <Routes>
        <Route path="/" element={<Homepage paths={"/"} />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/flames" element={<Flames />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/snakebite" element={<Snakebite />} />
        <Route path="/blocksmasher" element={<Blocksmasher />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/connectlines" element={<Connectlines />} />
      </Routes>
      {/* <GamePage className="gamepage" topsize={10} leftsize={10}></GamePage> */}
    </div>
  );
}

export default App;
