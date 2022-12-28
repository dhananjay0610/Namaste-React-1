
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "React h1 tag"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "React h2 tag"
);
console.log(heading1);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
