function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let arrAsString = arr.join();
  let separatedArray = [];
  let isAlive = true;
  let room = 0;

  for (let r = 0; r < arrAsString.length; r++) {
    let index = "";
    while (arrAsString[r] != "|") {
      if (r < arrAsString.length && arrAsString[r] != " ") {
        index += arrAsString[r];
        r++;
      } else {
        break;
      }
    }
    separatedArray.push(index);
  }

  let index = 0;
  while (index < separatedArray.length && isAlive) {
    switch (separatedArray[index]) {
      case "potion":
        index++;
        let addingHealth = Number(separatedArray[index]);
        if (health + addingHealth > 100) {
          addingHealth = 100 - health;
        }
        health += addingHealth;
        console.log(`You healed for ${addingHealth} hp.`);
        console.log(`Current health: ${health} hp.`);
        room++;
        break;
      case "chest":
        index++;
        let foundedCoins = Number(separatedArray[index]);
        console.log(`You found ${foundedCoins} coins.`);
        coins += foundedCoins;
        room++;
        break;
      default:
        let monster = separatedArray[index];
        index++;
        health -= Number(separatedArray[index]);
        room++;
        if (health <= 0) {
          isAlive = false;
          console.log(`You died! Killed by ${monster}.`);
          console.log(`Best room: ${room}`);
          break;
        } else {
          console.log(`You slayed ${monster}.`);
        }
        break;
    }
    index++;
  }
  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
