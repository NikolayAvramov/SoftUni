function tseamAccaunt(input) {
  let petersGames = input.shift().split(" ");
  // console.log(petersGames);
  let comandLine = input.shift();
  while (comandLine != "Play!") {
    let currentComand = comandLine.split(" ");
    let comand = currentComand.shift();
    let game = currentComand.shift();
    switch (comand) {
      case "Install":
        if (!petersGames.includes(game)) {
          petersGames.push(game);
        }
        break;
      case "Uninstall":
        for (let i = 0; i < petersGames.length; i++) {
          if (petersGames[i] == game) {
            petersGames.splice(i, 1);
          }
        }
        break;
      case "Update":
        if (petersGames.includes(game)) {
          for (let i = 0; i < petersGames.length; i++) {
            if (petersGames[i] === game) {
              let updatedGame = petersGames.splice(i, 1);
              petersGames.push(...updatedGame);
              break;
            }
          }
        }
        break;
      case "Expansion":
        let currGame = game.split("-");
        let actualyGame = currGame.shift();
        let expansion = currGame.shift();
        if (petersGames.includes(actualyGame)) {
          let index = petersGames.indexOf(actualyGame);
          game = `${actualyGame}:${expansion}`;
          petersGames.splice(index + 1, 0, game);
        }
    }
    comandLine = input.shift();
  }
  console.log(petersGames.join(" "));
}
tseamAccaunt([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
