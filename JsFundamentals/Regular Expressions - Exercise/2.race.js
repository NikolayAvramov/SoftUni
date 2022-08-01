function race(input) {
  let namesArr = input.shift().split(', ');
  let namesPattern = /[A-Za-z]/gm;
  let pointPattern = /\d/gm;
  let newMap = new Map();
  for (let name of namesArr) {
    newMap.set(name, 0);
  }
  let line = input[0];
  while (line !== 'end of race') {
    line = input.shift();
    let name = line.match(namesPattern);
    name = name.join('');
    let distance = line.match(pointPattern);
    let totalDisance = 0;

    if (newMap.has(name)) {
      for (let num of distance) {
        totalDisance += Number(num);
      }
      let oldDistance = newMap.get(name);
      oldDistance += totalDisance;
      newMap.set(name, oldDistance);
    }
    line = input[0];
  }
  let sorted = Array.from(newMap).sort(([keyA, valueA], [keyB, valueB]) => {
    return valueB - valueA;
  });
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
