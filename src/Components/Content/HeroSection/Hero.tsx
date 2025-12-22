import "./Hero.css";
import "./Infinitytext.css";
import { Herodata, Heropara } from "./HeroData";

import profilepic from "../../../assets/profilepic.jpeg";

function Hero() {
  return (
    <div id="Hero-container">
      <div id="Hero-wrapper">
        <img src={profilepic} id="Hero-img" className="cursor-target" alt="Profile" />
        <div id="wrapper">
          {Herodata.map((items, index) => {
            return <div key={index} className={items.cName}>{items.text}</div>;
          })}
        </div>
        <div id="Hero-text">
          <h2 id="Hero-head">
            <div>
              Hello, I am <span id="Hero-important">Vixi</span>
            </div>
            <div id="hero-divider" />
          </h2>
          <p id="Hero-p" className="cursor-target">{Heropara}</p>
        </div>
        <div id="Hero-buttons">
          <a href="#aboutme">
            <button className="hero-btn btn1 cursor-target">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;