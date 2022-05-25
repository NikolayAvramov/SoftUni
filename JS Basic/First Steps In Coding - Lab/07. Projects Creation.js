function makingProjects(input) {
    let architectName = input[0];
    let timeForProject = 3;
    let pojectsNumber = Number(input[1]);
    let timeForAll = pojectsNumber * timeForProject;
    console.log(`The architect ${architectName} will need ${timeForAll} hours to complete ${pojectsNumber} project/s.`);
}

makingProjects(["George", "4"])