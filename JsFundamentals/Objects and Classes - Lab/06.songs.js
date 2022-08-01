function song(arr) {
  class Songs {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let songsNum = arr.shift();
  let searchetType = arr.pop();
  let songsArr = [];
  for (let currLine of arr) {
    let [type, name, time] = currLine.split('_');
    let currentSong = new Songs(type, name, time);
    songsArr.push(currentSong);
  }
  if (searchetType == 'all') {
    for (let el of songsArr) {
      console.log(el.name);
    }
  } else {
    for (let element of songsArr) {
      if (element.typeList === searchetType) {
        console.log(element.name);
      }
    }
  }
}
song([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite',
]);
