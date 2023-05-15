const stringify = function (coolText) {
  return coolText[0]
    .map((_, index) =>
      coolText.reduce((text, letter) => text.concat(letter[index]), []).join("")
    )
    .join("\n");
};

exports.stringify = stringify;
