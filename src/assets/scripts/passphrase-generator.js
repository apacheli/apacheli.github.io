import { generatePassphrase, highlightPassword, loadWords } from "./passgen.js";

await loadWords();

const result = document.getElementById("result");
const range = document.getElementById("range");
const rangeResult = document.getElementById("range-result");

const generate = () => {
  rangeResult.value = range.value;
  const passphrase = generatePassphrase({
    len: range.valueAsNumber,
  });
  result.innerHTML = highlightPassword(passphrase);
};

rangeResult.oninput = () => {
  if (!/^\d+$/.test(rangeResult.value)) {
    return;
  }
  const value = Math.min(16, Number(rangeResult.value));
  if (value < 1) {
    return;
  }
  range.valueAsNumber = value;
  generate();
};

range.oninput = generate;
document.getElementById("generate-passphrase").onclick = generate;

document.getElementById("clipboard").onclick = async () => {
  await navigator.clipboard.writeText(result.textContent);
  alert("Copied passphrase!");
};

generate();
