// import "./Tictactoe.css";
//
// function Tictactoe(props) {
//   return (
//     <div className="tictactoe">
//       <img className="parent" src={bg} alt="tictactoe bg"></img>
//       <h2 className="gameName">Tic Tac Toe</h2>
//     </div>
//   );
// }
// export default Tictactoe;
import React, { useState } from "react";
import "./Tictactoe.css";
import bg from "../../resources/tictactoebg.png";

const Tictactoe = () => {
  const [turn, setTurn] = useState("X");

  const [cells, setCells] = useState(Array(9).fill(""));

  const [winner, setWinner] = useState();

  const [draw, setDraw] = useState(false);

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        //console.log(pattern);
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        } else if (!squares.includes("")) setDraw(true);
      });
    }
  };

  const handleClick = (num) => {
    //alert(num);

    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let squares = [...cells];

    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }

    checkForWinner(squares);
    setCells(squares);
    //console.log(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    setTurn("X");
    setDraw(false);
  };

  // const Cell = ({ num }) => {
  //   return (
  //     <td id="cells" onClick={() => handleClick(num)}>
  //       {cells[num]}
  //     </td>
  //   );
  // };

  return (
    <div className="tictactoe">
      <img className="parent" src={bg} alt="background"></img>
      <h2 className="gameName">Tic Tac Toe</h2>
      <div className="container">
        <table className="table">
          <p>Turn : {turn}</p>
          <br></br>
          <tbody>
            <tr id="firstrow">
              <td id="cells" onClick={() => handleClick(0)}>
                {cells[0]}
              </td>
              <td id="cells" onClick={() => handleClick(1)}>
                {cells[1]}
              </td>
              <td onClick={() => handleClick(2)}>{cells[2]}</td>
            </tr>

            <tr id="secondrow">
              {/* <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} /> */}
              <td id="cells" onClick={() => handleClick(3)}>
                {cells[3]}
              </td>
              <td id="cells" onClick={() => handleClick(4)}>
                {cells[4]}
              </td>
              <td onClick={() => handleClick(5)}>{cells[5]}</td>
            </tr>

            <tr id="thirdrow">
              {/* <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} /> */}
              <td id="cells" onClick={() => handleClick(6)}>
                {cells[6]}
              </td>
              <td id="cells" onClick={() => handleClick(7)}>
                {cells[7]}
              </td>
              <td onClick={() => handleClick(8)}>{cells[8]}</td>
            </tr>
          </tbody>
        </table>
        {winner && (
          <>
            <div className="winning-message">
              <div data-winning-message-text id="winning-message">
                {winner} is the winner!
              </div>
              <button id="restart-button" onClick={() => handleRestart()}>
                Restart
              </button>
            </div>
          </>
        )}
        {draw && (
          <>
            <div className="winning-message">
              <div data-winning-message-text id="winning-message">
                Game Draw!
              </div>
              <button id="restart-button" onClick={() => handleRestart()}>
                Restart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Tictactoe;
