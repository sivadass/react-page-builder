import React, { useContext } from "react";
import "./layers-list.scss";
import { Store } from "../../../store";

function LayersList() {
  const { state, dispatch } = useContext(Store);
  return (
    <div className="layers-list-container">
      <h3 className="title">Layers</h3>
      <ul className="layers-list">
        {state.layers.map(tool => (
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
