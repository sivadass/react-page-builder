import React from "react";
import Toolbar from "./components/toolbar";
import Canvas from "./components/canvas";
import Customizer from "./components/customizer";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>Page Builder</header>
      <main>
        <Toolbar />
        <Canvas />
        <Customizer />
      </main>
      <footer>&copy; Page Builder 2019</footer>
    </div>
  );
}

export default App;
