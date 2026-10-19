import { generatePassword } from "./passgen.js";

const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const digits = document.getElementById("digits");
const symbols = document.getElementById("symbols");
const slider = document.getElementById("slider");
const sliderResult = document.getElementById("slider-result");
const result = document.getElementById("result");

const checkboxes = [lower, upper, digits, symbols];

const main = () => {
  const checked = checkboxes.filter((c) => c.checked);
  if (checked.length === 1) {
    checked[0].disabled = true;
  } else {
    checkboxes.forEach((c) => {
      c.disabled = false;
    });
  }
  sliderResult.textContent = slider.value;
  result.textContent = generatePassword({
    len: slider.value,
    lower: lower.checked,
    upper: upper.checked,
    digits: digits.checked,
    symbols: symbols.checked,
  });
};

lower.onclick = main;
upper.onclick = main;
digits.onclick = main;
symbols.onclick = main;
slider.oninput = main;
document.getElementById("generate-password").onclick = main;

document.getElementById("clipboard").onclick = async () => {
  await navigator.clipboard.writeText(result.textContent);
  alert("Copied!");
};

main();
