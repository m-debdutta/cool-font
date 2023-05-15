const fs = require("fs");

const parse = (filePath) => {
  const contentOfFile = fs.readFileSync(filePath, "utf-8");
  const [fontWidth, fontHeight, text, ...fontData] = contentOfFile.split("\n");

  return { fontWidth: +fontWidth, fontHeight: +fontHeight, text, fontData };
};

const getCharacterCode = function () {
  return [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "?",
  ];
};

exports.getCharacterCode = getCharacterCode;
exports.parse = parse;
