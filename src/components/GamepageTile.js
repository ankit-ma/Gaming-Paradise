import gametile from "../resources/tiles game.png";

function GamepageTile(props) {
  const tilename = props.name;
  const topsize = props.topsize + "px";
  const leftsize = props.leftsize + "px";
  return (
    <div>
      <img
        className="tile"
        style={{ top: topsize, left: leftsize }}
        src={gametile}
        alt="GameTile"
      ></img>
      <h2
        className="gametile"
        style={{ top: props.toptext, left: props.lefttext }}
      >
        {tilename}
      </h2>
      <h2
        className="gametile"
        style={{ top: props.toptext + 50, left: props.lefttext + 20 }}
      >
        {props.sname}
      </h2>
    </div>
  );
}

export default GamepageTile;
