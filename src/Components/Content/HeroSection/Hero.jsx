import "./Hero.css"
import { Herodata, Heropara } from "./HeroData"

import profilepic from "../../../assets/profilepic.jpeg"

function Hero() {
    return(
        <>
            <img src={profilepic} id="Hero-img" />
            <div id="Hero-text">
                <div id="heroheadcontainer">
                    <h2 id="Hero-head">Hello, I am <span id="Hero-important">Vixy</span></h2>
                </div>
                <p id="Hero-p"></p>
            </div>
        </>
    )
}

export default Hero;