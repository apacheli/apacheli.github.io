const Container = ({ ...props }) => <div class="container margin" {...props} />;

const Row = ({ ...props }) => <div class="margin row" {...props} />;

const Checkbox = ({ label, ...props }) => {
  return (
    <label class="checkbox row">
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
};

const Result = ({ id, placeholder }) => <p id={id} class="container result">{placeholder}</p>;

const Slider = ({ id, value, ...props }) => {
  return (
    <div class="margin row">
      <input type="range" id={id} value={value} {...props} />
      <input type="text" class="container result-small" id={`${id}-result`} value={value} />
    </div>
  );
};

export { Checkbox, Container, Result, Row, Slider };
