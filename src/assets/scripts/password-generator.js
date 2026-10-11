import { render } from "https://esm.sh/preact";
import { signal } from "https://esm.sh/@preact/signals";
import { generatePassword } from "./passgen.js";

const password = signal(null);

const gen = () => {
  password.value = generatePassword();
};

gen();

const App = () => {
  return (
    <>
      <div class="tool-result">{password.value}</div>
      <button onclick={gen}>Generate Password</button>
    </>
  );
};

render(<App />, document.getElementById("main"));
