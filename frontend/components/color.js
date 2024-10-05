function changeColor (data) {
    let color = "#A5BEA1"
    if (data>54) {
        color = "#89D380"
    }
    if (data>65) {
        color = "#62C955"
    }
    if (data>110) {
        color = "#acdd2d"
    }
    if (data>150) {
        color = "#C9CD34"
    }
    if (data>170) {
        color = "#E3A236"
    }
    if (data>190) {
        color = "#D16E3E"
    }
    if (data>220) {
        color = "#D3502E"
    }
    if (data>260) {
        color = "#CC2B21"
    }
    if (data>300) {
        color = "#B00A00"
    }
    return color;
}

export {changeColor}