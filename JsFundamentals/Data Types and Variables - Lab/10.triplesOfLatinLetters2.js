function test(num) {
  for (let i = 0; i < num; i++) {
    for (let b = 0; b < num; b++) {
      for (let c = 0; c < num; c++) {
        console.log(
          String.fromCharCode(97 + i) +
            String.fromCharCode(97 + b) +
            String.fromCharCode(97 + c)
        );
      }
    }
  }
}
test(2);
