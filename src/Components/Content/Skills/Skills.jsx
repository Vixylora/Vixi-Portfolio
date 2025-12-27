import "./Skills.css";
import SkillApp from "./Apps/SkillApp";
import SkillLang from "./Languages/SkillLang";
import Dictionary from "./dictionary";
import SectionTitle from "../../Common/SectionTitle";

function Skill() {
    return(
        <div id="Skills-holder" className="scroll-animate">
            <SectionTitle>Skills</SectionTitle>
            <div id="Skills" className="stagger-children">
                <SkillApp />
                <SkillLang />
            </div>
            <Dictionary />
        </div>
    )
}

export default Skill;