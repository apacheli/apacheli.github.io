const CharacterSet = {
  AlphabetLower: "abcdefghijklmnopqrstuvwxyz",
  AlphabetUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Digits: "0123456789",
  Symbols: "!@#$%^&*",
};

const CHARACTERS_ALPHABET = CharacterSet.AlphabetLower + CharacterSet.AlphabetUpper;
const CHARACTERS_ALL = CHARACTERS_ALPHABET + CharacterSet.Digits + CharacterSet.Symbols;
const ASCII_ALL = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

const MIN_LEN = 4;
const MAX_LEN = 65536;

const bytes = new Uint16Array(256);
let bytesIndex = bytes.length;

function getRandomValue() {
  if (bytesIndex === bytes.length) {
    crypto.getRandomValues(bytes);
    bytesIndex = 0;
  }
  return bytes[bytesIndex++];
}

function getRandomInt(max) {
  const x = MAX_LEN - (MAX_LEN % max);
  let int;
  do {
    int = getRandomValue();
  } while (int >= x);
  return int % max;
}

function getRandomIndex(indexable) {
  return indexable[getRandomInt(indexable.length)];
}

function getRandomString(len, charset) {
  let str = "";
  for (let i = 0; i < len; i++) {
    str += getRandomIndex(charset);
  }
  return str;
}

function generatePassword(len = 16) {
  if (len < MIN_LEN || len > MAX_LEN) {
    throw new Error("Don't do that.");
  }

  const pw = [
    getRandomIndex(CharacterSet.AlphabetLower),
    getRandomIndex(CharacterSet.AlphabetUpper),
    getRandomIndex(CharacterSet.Digits),
    getRandomIndex(CharacterSet.Symbols),
  ];
  pw.length += len - MIN_LEN;

  for (let i = MIN_LEN; i < len; i++) {
    pw[i] = getRandomIndex(CHARACTERS_ALL);
  }

  for (let i = 0; i < MIN_LEN; i++) {
    const j = getRandomInt(pw.length - i) + i;
    [pw[i], pw[j]] = [pw[j], pw[i]];
  }

  return pw.join("");
}

export {
  ASCII_ALL,
  CHARACTERS_ALL,
  CHARACTERS_ALPHABET,
  CharacterSet,
  generatePassword,
  getRandomIndex,
  getRandomInt,
  getRandomString,
  getRandomValue,
};
