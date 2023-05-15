const { parse, getCharacterCode } = require("./src/parse.js");
const { createFont, createLookUp, applyFont } = require("./src/font.js");
const { stringify } = require("./src/stringify.js");

const main = function () {
  const filePath = "resource/fontDetails.txt";
  const characterCodes = getCharacterCode();

  const { fontWidth, _, text, fontData } = parse(filePath);

  const alphabets = createFont(fontData, fontWidth, _);
  const coolFont = createLookUp(characterCodes, alphabets);
  const coolText = applyFont(text, coolFont);

  console.log(stringify(coolText));
};

main();
