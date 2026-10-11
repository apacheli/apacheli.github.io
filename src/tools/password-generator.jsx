import { Container } from "../components/tool.jsx";

export const meta = {
  title: "Home",
  description: "Hi, I'm apacheli.",
  type: "tool",
  scripts: [
    "/assets/scripts/password-generator.js",
  ],
};

export default () => (
  <>
    <Container>
      <h1>Password Generator</h1>
      <div id="main" />
    </Container>
  </>
);
