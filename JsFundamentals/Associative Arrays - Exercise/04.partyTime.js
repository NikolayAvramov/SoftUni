function partyTime(input) {
  let vipGuests = [];
  let regGuest = [];
  let arrived = [];
  let isComing = false;

  for (let i = 0; i < input.length; i++) {
    let people = input[i];
    if (isComing) {
      arrived.push(people);
      continue;
    }
    if (people == "PARTY") {
      isComing = true;
      continue;
    }
    if (people[0] > 0) {
      vipGuests.push(people);
    } else {
      regGuest.push(people);
    }
  }
  for (let guest of arrived) {
    if (vipGuests.includes(guest)) {
      vipGuests.splice(vipGuests.indexOf(guest), 1);
    } else {
      regGuest.splice(regGuest.indexOf(guest), 1);
    }
  }
  console.log(vipGuests.length + regGuest.length);
  for (let people of vipGuests) {
    console.log(people);
  }
  for (let people of regGuest) {
    console.log(people);
  }
}

partyTime([
  "na",
  "1a",
  "2a",
  "3a",
  "4a",
  "5a",
  "6a",
  "7a",
  "PARTY",
  "4a",
  "1a",
  "2a",
  "7a",
]);
