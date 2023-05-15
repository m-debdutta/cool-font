const chunk = (line, chunkSize) => {
  const chunkedLine = [];
  for (let index = 0; index < line.length; index += chunkSize) {
    chunkedLine.push(line.slice(index, index + chunkSize));
  }

  return chunkedLine;
};

const createFontChunks = (fontData, fontWidth) => {
  return fontData.map((line) => chunk(line, fontWidth));
};

const createLetter = (fontChunks, charPos) => {
  return fontChunks.reduce((letter, line) => letter.concat(line[charPos]), []);
};

const createAlphabet = function (fontChunks) {
  const characterCount = fontChunks[0].length;
  const alphabets = [];
  for (let index = 0; index < characterCount; index++) {
    alphabets.push(createLetter(fontChunks, index));
  }

  return alphabets;
};

const createFont = (fontData, fontWidth, _) => {
  const fontChunks = createFontChunks(fontData, fontWidth);
  const alphabets = createAlphabet(fontChunks);

  return alphabets;
};

const createLookUp = (characterCodes, alphabets) => {
  return characterCodes.reduce((lookUp, code, index) => {
    lookUp[code] = alphabets[index];

    return { ...lookUp };
  }, {});
};

const applyFont = (text, lookUp) => {
  return text.split("").map((letter) => lookUp[letter]);
};

exports.applyFont = applyFont;
exports.createLookUp = createLookUp;
exports.createFont = createFont;
