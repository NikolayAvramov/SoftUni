function armies(input) {
  let res = {};
  for (let line of input) {
    if (line.includes('arrives')) {
      line = line.replace(' arrives', '');
      res[line] = [];
    } else if (line.includes('defeated')) {
      line = line.replace(' defeated', '');
      if (res.hasOwnProperty(line)) {
        delete res[line];
      }
    } else if (line.includes('+')) {
      let [armyName, count] = line.split(' + ');
      for (let key in res) {
        if (armyName == res[key][0]) {
          let oldValue = Number(res[key].count);
          let newValue = oldValue + Number(count);
          res[key][1] = newValue;
        }
        console.log();
      }
    } else if (line.includes(':')) {
      let [leader, otherInfo] = line.split(': ');
      let [armie, num] = otherInfo.split(', ');
      if (res.hasOwnProperty(leader)) {
        res[leader].push(armie, num);
      }
    }
  }

  console.log(res);
}
armies([
  'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205',
]);
