function matchPhoneNmbers(data) {
  let pattern = /\+359( |-)2\1\d{3}\1\d{4}/g;
  let match = pattern.exec(data);
  let res = [];
  while (match !== null) {
    res.push(match[0]);
    match = pattern.exec(data);
  }
  console.log(res.join(', '));
}

matchPhoneNmbers([
  '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222',
]);
