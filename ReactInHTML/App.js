//createElement(tag,{},content);
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React!"
);
console.log(heading); // return an Object(React Element)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
