import "./Blocksmasher.css";
import Board from "./tetris/board";
function Blocksmasher(props) {
  return (
    <div id="tertis-body">
      <div className="t-parent">
        <Board />
      </div>
    </div>
  );
}

export default Blocksmasher;
