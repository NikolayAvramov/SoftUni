function gramophone(band, album, song) {
  let timeForRotated = 2.5;
  let time = (band.length * album.length * song.length) / 2;
  let rotated = time / timeForRotated;
  console.log(`The plate was rotated ${Math.ceil(rotated)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
