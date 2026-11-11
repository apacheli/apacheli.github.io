import { renderMarkdown } from "../components/markdown.jsx";
import { Checkbox, Container, Range, Result, Row } from "../components/tool.jsx";

export const meta = {
  title: "Password Generator",
  description: "Generate secure and strong passwords with the click of a button.",
  type: "tool",
  tag: "Utility",
  scripts: ["/assets/scripts/password-generator.js"],
};

export default () => (
  <>
    <Container>
      <h1>Password Generator</h1>
      <div class="markdown">
        {renderMarkdown("> [!tip] We recommend your passwords are `16` or more characters long.")}
      </div>
      <Result id="result" placeholder="placeholder" />
      <Checkbox id="lower" label="Lowercase Letters" checked />
      <Checkbox id="upper" label="Uppercase Letters" checked />
      <Checkbox id="digits" label="Digits" checked />
      <Checkbox id="symbols" label="Symbols" checked />
      <Range id="range" min={4} max={256} value={16} />
      <Row>
        <button id="generate-password">Generate Password</button>
        <button id="clipboard">Copy Password</button>
      </Row>
    </Container>
  </>
);
