function extractingFile(input) {
  let programName = input.split("\\").pop().split(".");
  let extension = programName.pop();
  programName = programName.join(".");
  console.log(`File name: ${programName}`);
  console.log(`File extension: ${extension}`);
}
extractingFile("C:\\Internal\\training-internal\\Template.bak.pptx");
