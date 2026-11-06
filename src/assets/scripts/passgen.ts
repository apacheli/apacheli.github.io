const CharacterSet = {
  AlphabetLower: "abcdefghijklmnopqrstuvwxyz",
  AlphabetUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Digits: "0123456789",
  Symbols: "!@#$%^&*",
};

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

function getRandomInt(max: number) {
  const x = MAX_LEN - (MAX_LEN % max);
  let int;
  do {
    int = getRandomValue();
  } while (int >= x);
  return int % max;
}

interface Indexable<T> {
  [K: number]: T;
  length: number;
}

function getRandomIndex<T>(indexable: Indexable<T>) {
  return indexable[getRandomInt(indexable.length)];
}

function getRandomString(len: number, charset: string) {
  let str = "";
  for (let i = 0; i < len; i++) {
    str += getRandomIndex(charset);
  }
  return str;
}

interface GeneratePasswordOptions {
  len: number;
  lower?: boolean;
  upper?: boolean;
  digits?: boolean;
  symbols?: boolean;
}

function generatePassword(opts: GeneratePasswordOptions) {
  let set = "";
  if (opts.lower) {
    set += CharacterSet.AlphabetLower;
  }
  if (opts.upper) {
    set += CharacterSet.AlphabetUpper;
  }
  if (opts.digits) {
    set += CharacterSet.Digits;
  }
  if (opts.symbols) {
    set += CharacterSet.Symbols;
  }
  if (set.length === 0) {
    throw new Error("Empty set.");
  }
  return getRandomString(opts.len, set);
}

let words!: string[];

async function loadWords() {
  if (words === undefined) {
    const response = await fetch("/assets/words.txt");
    const text = await response.text();
    words = text.split(/\r?\n/g);
  }
}

interface GeneratePassphraseOptions {
  len: number;
}

function generatePassphrase(opts: GeneratePassphraseOptions) {
  const arr = new Array(opts.len);
  for (let i = 0; i < opts.len; i++) {
    arr[i] = getRandomIndex(words);
  }
  return arr.join("-");
}

const highlightTable: Record<string, string> = {
  "-": "pw-symbol",
};
for (let i = 0; i < CharacterSet.Digits.length; i++) {
  highlightTable[CharacterSet.Digits[i]] = "pw-digit";
}
for (let i = 0; i < CharacterSet.Symbols.length; i++) {
  highlightTable[CharacterSet.Symbols[i]] = "pw-symbol";
}

const highlightPassword = (pw: string) => {
  let str = "";
  let y;
  for (let i = 0; i < pw.length; i++) {
    const char = pw[i];
    const x = highlightTable[char];
    if (x !== y) {
      if (y !== undefined) {
        str += "</span>";
      }
      if (x !== undefined) {
        str += `<span class="${x}">`;
      }
      y = x;
    }
    str += char;
  }
  if (y !== undefined) {
    str += "</span>";
  }
  return str;
};

export {
  CharacterSet,
  generatePassword,
  getRandomIndex,
  getRandomInt,
  getRandomString,
  getRandomValue,
  generatePassphrase,
  loadWords,
  highlightPassword,
};
export type { GeneratePasswordOptions, Indexable };
