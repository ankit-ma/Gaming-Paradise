import "./Sudoku.css";
import { useState } from "react";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

const initial = [
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, 1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, -1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
];
function Sudoku(props) {
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function onInputChange(e, row, col) {
    var val = parseInt(e.target.value) || -1,
      grid = getDeepCopy(sudokuArr);
    if (val === -1 || (val >= 1 && val <= 9)) {
      grid[row][col] = val;
    }
    setSudokuArr(grid);
  }

  function compareSudokus(currentSudoku, solvedSudoku) {
    let res = {
      isComparable: true,
      isSolvable: true,
    };

    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (currentSudoku[i][j] != solvedSudoku[i][j]) {
          if (currentSudoku[i][j] != -1) {
            res.isComparable = false;
          }
          res.isSolvable = false;
        }
      }
    }
    return res;
  }
  function checkSudoku() {
    let sudoku = getDeepCopy(initial);
    console.log("I am here");
    solver(sudoku);
    let compare = compareSudokus(sudokuArr, sudoku);
    if (compare.isComparable) {
      alert("Congratulations you solved");
    } else if (compare.isSolvable) {
      alert("Keep going");
    } else {
      alert("Sudoku can't be solved. Try again");
    }
  }

  function resetSudoku() {
    let sudoku = getDeepCopy(initial);
    setSudokuArr(sudoku);
  }
  function solveSudoku() {
    let sudoku = getDeepCopy(initial);
    solver(sudoku);
    setSudokuArr(sudoku);
  }

  // function checkSudoku() {}
  function checkRow(grid, row, num) {
    return grid[row].indexOf(num) === -1;
  }
  function checkCol(grid, col, num) {
    return grid.map((row) => row[col]).indexOf(num) === -1;
  }

  function checkBox(grid, row, col, num) {
    let boxArr = [],
      rowStart = row - (row % 3),
      colStart = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxArr.push(grid[rowStart + i][colStart + j]);
      }
    }
    return boxArr.indexOf(num) === -1;
  }
  function checkValid(grid, row, col, num) {
    if (
      checkRow(grid, row, num) &&
      checkCol(grid, col, num) &&
      checkBox(grid, row, col, num)
    ) {
      return true;
    }
    return false;
  }

  function getNext(row, col) {
    return col !== 8 ? [row, col + 1] : row != 8 ? [row + 1, 0] : [0, 0];
  }

  function solver(grid, row = 0, col = 0) {
    if (grid[row][col] !== -1) {
      let isLast = row >= 8 && col >= 8;
      if (!isLast) {
        let [newRow, newCol] = getNext(row, col);
        return solver(grid, newRow, newCol);
      }
    }

    for (let num = 1; num <= 9; num++) {
      if (checkValid(grid, row, col, num)) {
        grid[row][col] = num;
        let [newRow, newCol] = getNext(row, col);
        if (!newRow && !newCol) {
          return true;
        }
        if (solver(grid, newRow, newCol)) return true;
      }
    }
    //notice here
    grid[row][col] = -1;
    return false;
  }
  return (
    <div className="Sudoku">
      <div className="SudokuHeader">
        <h3>Sudoku Solver</h3>
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
              return (
                <tr
                  key={rIndex}
                  className={(row + 1) % 3 === 0 ? "bBorder" : ""}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                    return (
                      <td
                        key={rIndex + cIndex}
                        className={(col + 1) % 3 === 0 ? "rBorder" : ""}
                      >
                        <input
                          onChange={(e) => onInputChange(e, row, col)}
                          disabled={initial[row][col] !== -1}
                          value={
                            sudokuArr[row][col] === -1
                              ? ""
                              : sudokuArr[row][col]
                          }
                          className="cellinput"
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="buttonContainer">
          <button className="checkButton" onClick={checkSudoku}>
            Check
          </button>
          <button className="solveButton" onClick={solveSudoku}>
            Solve
          </button>
          <button className="resetButton" onClick={resetSudoku}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sudoku;
