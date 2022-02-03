interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

type ColorfulCircle = Colorful & Circle;

let colorfulCircle: ColorfulCircle = { color: "red", "radius": 10 };