import "./aboutme.css";
import SectionTitle from "../../Common/SectionTitle";

const abouttext =
  "I'm Vixi, a passionate web developer with a knack for creating dynamic and user-friendly websites. With a background in computer science and a love for design. When I'm not coding, you can find me playing games, having fun with friends, or just online on Discord.";

function AboutMe() {
  return (
    <div id="about-back">
      <div id="aboutme" className="scroll-animate">
        <SectionTitle highlightText="Me">About Me</SectionTitle>
        <div id="about-description" className="cursor-target">
          {abouttext}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;