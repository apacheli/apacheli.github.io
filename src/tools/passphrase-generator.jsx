import { renderMarkdown } from "../components/markdown.jsx";
import { Container, Range, Result, Row } from "../components/tool.jsx";

export const meta = {
  title: "Passphrase Generator",
  description: "Generate cryptographically secure passphrases easily.",
  type: "tool",
  tag: "Utility",
  scripts: ["/assets/scripts/passphrase-generator.js"],
};

export default () => (
  <>
    <Container>
      <h1>Passphrase Generator</h1>
      <div class="markdown">
        {renderMarkdown("> [!warning] This tool is in beta, but it should work for most use cases.")}
      </div>
      <Result id="result" placeholder="placeholder" />
      <Range id="range" min={1} max={16} value={4} />
      <Row>
        <button id="generate-passphrase">Generate Passphrase</button>
        <button id="clipboard">Copy Passphrase</button>
      </Row>
    </Container>
  </>
);
