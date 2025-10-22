import Hero from "./HeroSection/Hero";
import AboutMe from "./AboutMe/aboutme";
import Skill from "./Skills/Skills";
import "./Landing.css";

function Landing() {
    return(
        <div id="landing">
            <Hero />
            <AboutMe />
            <Skill />
        </div>
    )
}

export default Landing;