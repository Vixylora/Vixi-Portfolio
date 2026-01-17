import "./SkillApp.css";
import AppList from "./AppData";

function SkillApp() {
    return(
        <div id="Skillapps">
            {AppList.map((items, index) => {
                return(
                    <div key={index} className={items.appclass}>
                        <img src={items.img} className={items.imgclass} alt={items.name} />
                        <div className="text-container">
                            <h3 className={items.titleclass}>{items.name}</h3>
                            <p className={items.profeciencyclass}>{items.profeciency}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillApp;