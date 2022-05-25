function fishTank(input) {
    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentForSandAndStuff = Number(input[3]) / 100;
    const aquariumVolume = length * width * height;
    const literVolume = aquariumVolume / 1000;
    const neededLiters = literVolume * (1 - percentForSandAndStuff);
    console.log(neededLiters);

}

fishTank(["85","75","47","17"])