function echoTye(parameter) {
  let type = typeof parameter;
  console.log(type);

  if (type == "string" || type == "number") {
    console.log(parameter);
  } else {
    console.log(`Parameter is not suitable for printing`);
  }
}
echoTye("hello");
echoTye(16);
echoTye(null);
