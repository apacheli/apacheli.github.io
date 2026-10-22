import { renderMarkdown } from "../components/markdown.jsx";
import { Checkbox, Container, Result, Row, Slider } from "../components/tool.jsx";

export const meta = {
  title: "Password Generator",
  description: "Need a good random password with high entropy? Use my password generator for the best results!",
  type: "tool",
  tag: "Utility",
  scripts: [
    "/assets/scripts/password-generator.js",
  ],
};

export default () => (
  <>
    <Container>
      <h1>Password Generator</h1>
      <id class="markdown">
        {renderMarkdown("> [!tip] We recommend your passwords are `16` or more characters long.")}
      </id>
      <Result id="result" placeholder="placeholder" />
      <Checkbox id="lower" label="Lowercase Letters" checked />
      <Checkbox id="upper" label="Uppercase Letters" checked />
      <Checkbox id="digits" label="Digits" checked />
      <Checkbox id="symbols" label="Symbols" checked />
      <Slider id="slider" min={4} max={256} value={16} />
      <Row>
        <button id="generate-password">Generate Password</button>
        <button id="clipboard">Copy to Clipboard</button>
      </Row>
    </Container>
  </>
);
