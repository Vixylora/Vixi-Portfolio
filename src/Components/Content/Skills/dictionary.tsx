import "./dictionary.css";
import { HiMiniArrowRight } from "react-icons/hi2";

function Dictionary() {
    // Booting Up / Debugging / Optimized / Overclocked / Hypercharged
    // Learning /  Proficient / Skilled / Expert / Mastered
    return(
        <div id="dictionary-items">
            <div className="meaning cursor-target dict1">Booting Up <HiMiniArrowRight /> Learning</div>
            <div className="meaning cursor-target dict2">Debugging <HiMiniArrowRight /> Proficient</div>
            <div className="meaning cursor-target dict3">Optimized <HiMiniArrowRight /> Skilled</div>
            <div className="meaning cursor-target dict4">Overclocked <HiMiniArrowRight /> Expert</div>
            <div className="meaning cursor-target dict5">Hypercharged <HiMiniArrowRight /> Mastered</div>
        </div>
    )
}

export default Dictionary;