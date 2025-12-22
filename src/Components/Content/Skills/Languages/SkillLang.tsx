import "./SkillLang.css";
import LanguagesData from "./LanguagesData";

function SkillLang() {
    return(
        <div id="lang-holder">
            {LanguagesData.map((items, index) => {
                return(
                    <div key={index} className={items.classN}>
                        <h3 className={items.className}>{items.name}</h3>
                        <h3 className={items.classLevel} style={{color: items.color}}>{items.level}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillLang;