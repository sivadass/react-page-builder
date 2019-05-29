import React from "react";
import "./layers-list.scss";
import { LAYER_ITEMS } from "./constants";

function LayersList() {
  return (
    <div className="layers-list-container">
      <h3 className="title">Layers</h3>
      <ul className="layers-list">
        {LAYER_ITEMS.map(tool => (
          <li className="layer-item" key={tool.id}>
            <button
              onClick={() => {
                console.log("Selected ", tool.name, "tool");
              }}
            >
              {tool.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LayersList;
