// Forging / Tempered / Honed / Mastered / Transcendant
// FFE1BA / FFC88F / FFA95E / F07D3C / C75B24

function Colorselector(level: string): string {
    switch(level) {
        case "Forging":
            return "#FFE1BA";
        case "Tempered":
            return "#FFC88F";
        case "Honed":
            return "#FFA95E";
        case "Mastered":
            return "#F07D3C";
        case "Transcendant":
            return "#C75B24";
        default:
            return "#FFFFFF";
    }
}

function widthselector(level: string): string {
    switch(level) {
        case "Forging":
            return "20%";
        case "Tempered":
            return "40%";
        case "Honed":
            return "60%";
        case "Mastered":
            return "80%";
        case "Transcendant":
            return "100%";
        default:
            return "0";
    }
}

export { Colorselector, widthselector };