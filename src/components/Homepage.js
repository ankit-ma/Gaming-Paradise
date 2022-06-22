import background from "../resources/background.png";
import logo from "../resources/logo copy.png";
import { useState } from "react";
import "./Homepagestyle.css";
import { Link } from "react-router-dom";
function Homepage(props) {
  const [setHomepage, setpagehandler] = useState(true);

  const imgclickhandler = (event) => {
    console.log("Image clicked");
    props.paths = "/gamepage";
    setpagehandler(props.value);
  };
  return (
    <div className="background-image">
      <img className="parent" src={background} alt="background"></img>
      <Link to="/gamepage">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={imgclickhandler}
        ></img>
      </Link>
      <h2 className="text">Click on Gaming Paradise</h2>
      <p className="bottomtext">
        Team{" "}
        <b>
          <i>MADRAS CAFE</i>
        </b>
      </p>
    </div>
  );
}
export default Homepage;
