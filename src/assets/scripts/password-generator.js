import { generatePassword, highlightPassword } from "./passgen.js";

const result = document.getElementById("result");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const digits = document.getElementById("digits");
const symbols = document.getElementById("symbols");
const range = document.getElementById("range");
const rangeResult = document.getElementById("range-result");

const generate = () => {
  rangeResult.value = range.value;
  const password = generatePassword({
    len: range.valueAsNumber,
    lower: lower.checked,
    upper: upper.checked,
    digits: digits.checked,
    symbols: symbols.checked,
  });
  result.innerHTML = highlightPassword(password);
};

const checkbox = function () {
  if (!(lower.checked || upper.checked || digits.checked || symbols.checked)) {
    this.checked = true;
  }
  generate();
};
lower.onclick = checkbox;
upper.onclick = checkbox;
digits.onclick = checkbox;
symbols.onclick = checkbox;

rangeResult.oninput = () => {
  if (!/^\d+$/.test(rangeResult.value)) {
    return;
  }
  const value = Math.min(1024, Number(rangeResult.value));
  if (value < 4) {
    return;
  }
  range.valueAsNumber = value;
  generate();
};

range.oninput = generate;
document.getElementById("generate-password").onclick = generate;

document.getElementById("clipboard").onclick = async () => {
  await navigator.clipboard.writeText(result.textContent);
  alert("Copied password!");
};

generate();
