import "./Tictactoe.css";
import bg from "../../resources/tictactoebg.png";
function Tictactoe(props) {
  return (
    <div className="tictactoe">
      <img className="parent" src={bg} alt="tictactoe bg"></img>
      <h2 className="gameName">Tic Tac Toe</h2>
    </div>
  );
}
export default Tictactoe;
