import Hero from "./HeroSection/Hero";
import AboutMe from "./AboutMe/aboutme";
import Skill from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { useScrollAnimation } from "../Common/useScrollAnimation";
import "./Landing.css";

function Landing() {
    useScrollAnimation();
    
    return(
        <div id="landing">
            <Hero />
            <AboutMe />
            <Skill />
            <Contact />
        </div>
    )
}

export default Landing;