const Container = ({ children, ...props }) => (
  <div class="tool-container" {...props}>
    {children}
  </div>
);

export { Container };
