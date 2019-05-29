import React from "react";
import Builder from "./components/builder";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>Page Builder</header>
      <main>
        <Builder />
      </main>
      <footer>&copy; Page Builder 2019</footer>
    </div>
  );
}

export default App;
