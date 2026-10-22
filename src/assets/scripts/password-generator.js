import { generatePassword } from "./passgen.js";

const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const digits = document.getElementById("digits");
const symbols = document.getElementById("symbols");
const result = document.getElementById("result");
const slider = document.getElementById("slider");
const sliderResult = document.getElementById("slider-result");

const checkboxes = [lower, upper, digits, symbols];

const main = () => {
  const checked = checkboxes.filter((c) => c.checked);
  if (checked.length === 1) {
    checked[0].disabled = true;
  } else if (checked.length === 2) {
    checkboxes.forEach((c) => {
      c.disabled = false;
    });
  }
  sliderResult.value = slider.value;
  const password = generatePassword({
    len: slider.value,
    lower: lower.checked,
    upper: upper.checked,
    digits: digits.checked,
    symbols: symbols.checked,
  });
  result.innerHTML = highlightPassword(password);
};

const highlightPassword = (password) => {
  return password.replace(/(\d+)|([!@#$%^&*]+)/g, (_, digits, symbols) => {
    if (digits) {
      return `<span class="digits">${digits}</span>`;
    }
    if (symbols) {
      return `<span class="symbols">${symbols}</span>`;
    }
  });
};

lower.onclick = main;
upper.onclick = main;
digits.onclick = main;
symbols.onclick = main;
slider.oninput = main;
document.getElementById("generate-password").onclick = main;

sliderResult.oninput = () => {
  const value = parseInt(sliderResult.value);
  if (value < 4 || Number.isNaN(value)) {
    return;
  }
  slider.value = `${Math.min(256, value)}`;
  main();
};

document.getElementById("clipboard").onclick = async () => {
  await navigator.clipboard.writeText(result.textContent);
  alert("Copied!");
};

main();
