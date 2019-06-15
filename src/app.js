import React from "react";
import { CookiesProvider } from "react-cookie";
import Builder from "./components/builder";
import "./app.scss";

function App() {
  return (
    <CookiesProvider>
      <div className="app">
        <header>Page Builder</header>
        <main>
          <Builder />
        </main>
        <footer>&copy; Page Builder 2019</footer>
      </div>
    </CookiesProvider>
  );
}

export default App;
