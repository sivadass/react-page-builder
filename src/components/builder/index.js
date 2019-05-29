import React from "react";
import Toolbar from "./toolbar";
import Canvas from "./canvas";
import Customizer from "./customizer";
import LayersList from "./layers-list";
import "./builder.scss";

const Builder = () => {
  return (
    <div className="builder">
      <div className="builder-header">
        <Toolbar />
      </div>
      <div className="builder-main">
        <LayersList />
        <Canvas />
        <Customizer />
      </div>
    </div>
  );
};

export default Builder;
