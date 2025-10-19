import Hero from "./HeroSection/Hero";
import AboutMe from "./AboutMe/aboutme";
import "./Landing.css";

function Landing() {
    return(
        <div id="landing">
            <Hero />
            <AboutMe />
        </div>
    )
}

export default Landing;