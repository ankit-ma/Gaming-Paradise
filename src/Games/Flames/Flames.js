import { useState } from "react";
import bgimage from "../../resources/flamesbg.png";
import bgimagetwo from "./Resources/background01.gif";
import whiteimg from "./Resources/white.png";
import friendimg from "./Resources/Friend.png";
import loveimg from "./Resources/Love.png";
import marriageimg from "./Resources/Marriage.png";
import sister from "./Resources/Sister.png";
import affairimg from "./Resources/Affair.png";
import enemyimg from "./Resources/enemy.png";
import "./Flames.css";
function Flames(props) {
  const [enteredPersonOne, setPersonOne] = useState("");
  const [enteredSecondOne, setSecondOne] = useState("");
  const [visible, setvisible] = useState(true);
  const [key, setkey] = useState(1);

  const firstPersonChangeEventhandler = (event) => {
    setPersonOne(event.target.value);
    console.log(event.target.value);
  };

  const secondPersonChangeEventhandler = (event) => {
    setSecondOne(event.target.value);
    console.log(event.target.value);
  };

  const deletestring = (str, x) => {
    return str.substring(0, x) + str.substring(x + 1);
  };
  const submitEventHadler = (event) => {
    let fpname = enteredPersonOne.toLowerCase().trim();
    let sname = enteredSecondOne.toLowerCase().trim();

    // console.log(enteredPersonOne);
    // console.log(enteredSecondOne);
    console.log(fpname);
    console.log(sname);
    let firsthashmap = new Map();
    let secondhashmap = new Map();
    // creating hashmap for fpname
    for (var i in fpname) {
      var temp = fpname.charAt(i);
      if (firsthashmap.has(temp))
        firsthashmap.set(temp, firsthashmap.get(temp) + 1);
      else {
        firsthashmap.set(temp, 1);
      }
    }
    // creating hashmap for sname
    for (var j in sname) {
      var temps = sname.charAt(j);
      if (secondhashmap.has(temps))
        secondhashmap.set(temps, secondhashmap.get(temps) + 1);
      else {
        secondhashmap.set(temps, 1);
      }
    }
    var res = 0; // Contains number of unique character in two names
    for (const [key, value] of firsthashmap.entries()) {
      //console.log(key);
      if (secondhashmap.has(key)) {
        res = res + Math.abs(value - secondhashmap.get(key));
        secondhashmap.delete(key);
        console.log(secondhashmap);
      } else {
        res = res + value;
      }
    }

    for (const [key, value] of secondhashmap.entries()) {
      res += value;
    }
    console.log(res);
    let flames = "FLAMES";
    var x = 0;

    while (flames.length != 1) {
      x = res % flames.length;
      console.log(x);
      if (x == 0) x = flames.length;
      let ree = flames.substring(0, x - 1) + flames.substring(x);
      flames = ree;
    }

    console.log(flames);
    switch (flames) {
      case "F":
        setkey(2);
        break;
      case "L":
        setkey(3);
        break;
      case "A":
        setkey(4);
        break;
      case "M":
        setkey(5);
        break;
      case "E":
        setkey(6);
        break;
      case "S":
        setkey(7);
        break;
      default:
        setkey(1);
        break;
    }
    // Here we have letter for which we assign our values;
  };
  return (
    <div className="flames">
      <img className="parent" src={bgimage} alt="bgimage"></img>
      <img className="parent" src={bgimagetwo} alt="bgimage"></img>
      <h2 className="gameName">Flames</h2>

      <div>
        <input
          className="formsin"
          style={{ top: "40%", left: "10%" }}
          onChange={firstPersonChangeEventhandler}
          placeholder="First Person Name"
        ></input>
      </div>

      <div>
        <input
          className="formsin"
          style={{ top: "60%", left: "10%" }}
          onChange={secondPersonChangeEventhandler}
          placeholder="Second Person Name"
        ></input>
      </div>
      <div className="forms" style={{ top: "80%", left: "10%" }}>
        <button className="button" onClick={submitEventHadler}>
          Show Relationship
        </button>
      </div>
      <div className="resultimg">
        {visible && key === 1 ? (
          <img src={whiteimg} key={key} alt="white img" />
        ) : null}
        {visible && key === 2 ? (
          <img src={friendimg} key={key} alt="friend img" />
        ) : null}
        {visible && key === 3 ? (
          <img src={loveimg} key={key} alt="loveimg" />
        ) : null}
        {visible && key === 4 ? (
          <img src={affairimg} key={key} alt="Affair" />
        ) : null}
        {visible && key === 5 ? (
          <img src={marriageimg} key={key} alt="marriage imgae" />
        ) : null}
        {visible && key === 6 ? (
          <img src={enemyimg} key={key} alt="enemy" />
        ) : null}
        {visible && key === 7 ? (
          <img src={sister} key={key} alt="sisterimg" />
        ) : null}
      </div>

      <h3 className="BottomText">
        According to the names,It tells Relationship
      </h3>
    </div>
  );
}
export default Flames;
