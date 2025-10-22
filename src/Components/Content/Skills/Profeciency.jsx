// Forging / Tempered / Honed / Mastered / Transcendant
// FFE1BA / FFC88F / FFA95E / F07D3C / C75B24

function Colorselector(level) {
    switch(level) {
        case "Forging":
            return "#FFE1BA";
            break;
        case "Tempered":
            return "#FFC88F";
            break;
        case "Honed":
            return "#FFA95E";
            break;
        case "Mastered":
            return "#F07D3C";
            break;
        case "Transcendant":
            return "#C75B24";
            break;
        default:
            return "#FFFFFF";
    }
}

function widthselector(level) {
    switch(level) {
        case "Forging":
            return "20%";
            break;
        case "Tempered":
            return "40%";
            break;
        case "Honed":
            return "60%";
            break;
        case "Mastered":
            return "80%";
            break;
        case "Transcendant":
            return "100%";
            break;
        default:
            return "0";
    }
}

export { Colorselector, widthselector };