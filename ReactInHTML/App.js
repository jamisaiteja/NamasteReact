//createElement(tag,{},content);

// <div id="parent">
// ⭑I <div id="child">
// +     <h1>I'm h1 tag</h1>
// +     <h1>I'm h1 tag</h1>
// ⭑ </div>
//   <div id="child">
// +     <h1>I'm h1 tag</h1>
// +     <h1>I'm h1 tag</h1>
// ⭑ </div>
// </div>
// * ReactElement(Object) HTML (Browser Understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React!"
);
console.log(heading); // return an Object(React Element) -> becomes HTML(Browser Understands)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
