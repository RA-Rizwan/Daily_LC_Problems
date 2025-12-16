const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childOne" }, [
    React.createElement("h1", { id: "heading" }, "im heading one"),
    React.createElement("h1", { id: "heading" }, "im heading two"),
  ]),
  React.createElement("div", { id: "childTwo" }, [
    React.createElement("h1", { id: "heading" }, "im heading one"),
    React.createElement("h1", { id: "heading" }, "im heading two"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)