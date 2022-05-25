function trainingLab(input) {
    const roomLength = Number(input[0]);
    const roomWidth = Number(input[1]);
    const walway = 1;
    const onePlaceLength = 1.2;
    const onePlaceWidth = 0.70;
    const doorAndCharirSpace = 3;

    let rows = Math.floor(roomLength / onePlaceLength);
    let placePerRow = Math.floor((roomWidth - walway) / onePlaceWidth);
    let placeInRoom = (rows * placePerRow) - doorAndCharirSpace;
    console.log(placeInRoom)
}
trainingLab(["8.4", "5.2"])