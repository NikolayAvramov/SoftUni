function functionName(input) {
  let res = {};
  let maxCapacity = input.shift();
  for (let line of input) {
    if (line == 'Statistics') {
      break;
    }
    let [comand, paramOne, paramTwo, paramThree] = line.split('=');
    switch (comand) {
      case 'Add':
        let userName = paramOne;
        let send = Number(paramTwo);
        let reciver = Number(paramThree);
        if (!res.hasOwnProperty(userName)) {
          res[userName] = {};
          (res[userName].send = send), (res[userName].recive = reciver);
        } else {
          continue;
        }
        break;
      case 'Message':
        let sender = paramOne;
        let recivers = paramTwo;
        if (res.hasOwnProperty(sender) && res.hasOwnProperty(recivers)) {
          res[sender].send += 1;
          res[recivers].recive += 1;
        } else {
          continue;
        }
        if (res[sender].send + res[sender].recive == maxCapacity) {
          console.log(`${sender} reached the capacity!`);
          delete res[sender];
        }
        if (res[recivers].send + res[recivers].recive == maxCapacity) {
          console.log(`${recivers} reached the capacity!`);
          delete res[recivers];
        }
        break;
      case 'Empty':
        let user = paramOne;
        if (res.hasOwnProperty(user)) {
          delete res[user];
        }
        if (user == 'All') {
          res = {};
        }
        break;
    }
  }
  let count = Object.keys(res);

  console.log(`Users count: ${count.length}`);
  if (count.length > 0) {
    for (let key in res) {
      let numOfMesages = res[key].send + res[key].recive;
      console.log(`${key} - ${numOfMesages}`);
    }
  }
}
functionName([
  '10',
  'Add=Berg=9=0',
  'Add=Kevin=0=0',
  'Message=Berg=Kevin',
  'Add=Mark=5=4',
  'Statistics',
]);
