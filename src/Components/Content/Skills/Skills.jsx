import "./Skills.css";
import SkillApp from "./Apps/SkillApp";
import SkillLang from "./Languages/SkillLang";
import Dictionary from "./dictionary";

function Skill() {
    return(
        <div id="Skills-holder">
            <h2 id="skill-title">Skills <div id="divider" /></h2>
            <div id="Skills">
                <SkillApp />
                <SkillLang />
            </div>
            <Dictionary />
        </div>
    )
}

export default Skill;