import React, { useContext } from "react";
import "./layers-list.scss";
import { Store } from "../../../store";
import actions from "../../../store/action-types";

function LayersList() {
  const { state, dispatch } = useContext(Store);
  const removeLayer = id => {
    return dispatch({
      type: actions.REMOVE_LAYER,
      id
    });
  };
  return (
    <div className="layers-list-container">
      <h3 className="title">Layers</h3>
      <ul className="layers-list">
        {state.layers.map(tool => (
          <li className="layer-item" key={tool.id}>
            <button onClick={() => removeLayer(tool.id)}>{tool.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LayersList;
