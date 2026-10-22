const CharacterSet = {
  AlphabetLower: "abcdefghijklmnopqrstuvwxyz",
  AlphabetUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Digits: "0123456789",
  Symbols: "!@#$%^&*",
};

const MIN_LEN = 4;
const MAX_LEN = 256;

const bytes = new Uint8Array(256);
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
  if (opts.len < MIN_LEN || opts.len > MAX_LEN) {
    throw new Error("Invalid password length.");
  }
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

export { CharacterSet, generatePassword, getRandomIndex, getRandomInt, getRandomString, getRandomValue };
export type { GeneratePasswordOptions, Indexable };
