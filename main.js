let bodyPartOptions = [],
    directionOptions = ["left", "right"],
    colourOptions = ["blue", "yellow", "red", "green"];

const spinner = document.getElementById("spin"),
    game = document.getElementById("game"),
    difficulty = document.getElementById("difficulty"),
    difficultyEasy = document.getElementById("easy"),
    difficultyNormal = document.getElementById("normal"),
    difficultyHard = document.getElementById("hard"),
    difficultyChange = document.getElementById("change"),
    back = document.getElementById("back");

difficultyChange.addEventListener("click", () => {
    difficultyChange.style.display = "none";
    game.style.display = "none";
    difficulty.style.display = "block";
    back.style.display = "block";
    document.getElementById("body-part").innerHTML = "";
    document.getElementById("direction").innerHTML = "";
    document.getElementById("colour").innerHTML = "";
});

difficultyEasy.addEventListener("click", () => {
    bodyPartOptions = ["foot"];
    difficulty.style.display = "none";
    game.style.display = "block";
    back.style.display = "block";
    change.style.display = "block";
});

difficultyNormal.addEventListener("click", () => {
    bodyPartOptions = ["foot", "hand"];
    difficulty.style.display = "none";
    game.style.display = "block";
    back.style.display = "block";
    change.style.display = "block";
});

difficultyHard.addEventListener("click", () => {
    bodyPartOptions = ["foot", "hand", "elbow", "knee", "cheek", "shoulder"];
    difficulty.style.display = "none";
    game.style.display = "block";
    back.style.display = "block";
    change.style.display = "block";
});

spinner.addEventListener("click", () => {
    const bodyPart =
        bodyPartOptions[Math.floor(Math.random() * bodyPartOptions.length)];
    const direction =
        directionOptions[Math.floor(Math.random() * directionOptions.length)];
    const colour =
        colourOptions[Math.floor(Math.random() * colourOptions.length)];

    document.getElementById("body-part").innerHTML = bodyPart;
    document.getElementById("direction").innerHTML = direction;
    document.getElementById("colour").innerHTML = colour;
    if (colour === "yellow") {
        document.getElementById("colour").style.color = "#e6e600";
    } else {
        document.getElementById("colour").style.color = colour;
    }
});
