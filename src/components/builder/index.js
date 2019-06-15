import React from "react";
import { useCookies } from "react-cookie";
import Toolbar from "./toolbar";
import Canvas from "./canvas";
import Customizer from "./customizer";
import LayersList from "./layers-list";
import { TOOL_ITEMS } from "./constants";
import "./builder.scss";

const Builder = () => {
  const [cookies, setCookie] = useCookies(["name", "age"]);

  function handleClick(newName) {
    setCookie("name", newName, { path: "/" });
  }
  return (
    <div className="builder">
      <div className="builder-header">
        <Toolbar tools={TOOL_ITEMS} />
      </div>
      <div className="builder-main">
        <LayersList />
        <Canvas />
        <Customizer />
      </div>
      {cookies.name && <h1>Hello {cookies.name}!</h1>}
      <button onClick={() => handleClick("john doe")}>Click me!</button>
    </div>
  );
};

export default Builder;
