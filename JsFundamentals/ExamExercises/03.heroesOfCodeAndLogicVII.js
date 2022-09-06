function heroes(input) {
  let heroesNum = input.shift();
  let obj = {};
  let line = input.shift();
  for (let i = 0; i < heroesNum; i++) {
    let [heroName, health, magicPower] = line.split(' ');
    obj[heroName] = {};
    (obj[heroName].hp = health), (obj[heroName].mp = magicPower);
    line = input.shift();
  }
  while (line !== 'End') {
    let [action, hero, paramOne, paramTwo] = line.split(' - ');
    switch (action) {
      case 'Heal':
        let addingHealth = Number(paramOne);
        let addedHealth = Math.min(100 - obj[hero].hp, addingHealth);
        console.log(`${hero} healed for ${addedHealth} HP!`);
        obj[hero].hp = addedHealth + Number(obj[hero].hp);
        break;
      case 'Recharge':
        let addingMagicPower = Number(paramOne);
        let addedMagigPower = Math.min(200 - obj[hero].mp, addingMagicPower);
        console.log(`${hero} recharged for ${addedMagigPower} MP!`);
        obj[hero].mp = addedMagigPower + Number(obj[hero].mp);
        break;
      case 'TakeDamage':
        let damage = Number(paramOne);
        let attacker = paramTwo;
        obj[hero].hp -= damage;
        if (obj[hero].hp > 0) {
          console.log(
            `${hero} was hit for ${damage} HP by ${attacker} and now has ${obj[hero].hp} HP left!`
          );
        } else {
          delete obj[hero];
          console.log(`${hero} has been killed by ${attacker}!`);
        }
        break;
      case 'CastSpell':
        let neededMp = Number(paramOne);
        let spellName = paramTwo;
        let test = obj[hero].mp - neededMp;
        if (test >= 0) {
          console.log(
            `${hero} has successfully cast ${spellName} and now has ${test} MP!`
          );
          obj[hero].mp = test;
        } else {
          console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }

        break;
    }

    line = input.shift();
  }
  for (let key in obj) {
    console.log(key);
    console.log(`  HP: ${obj[key].hp}`);
    console.log(`  MP: ${obj[key].mp}`);
  }
}
heroes([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);
