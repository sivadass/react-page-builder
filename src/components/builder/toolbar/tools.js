import React from "react";
import uuid from "uuidv4";
import { TOOL_ITEMS } from "./constants";

const Tools = ({ addLayer, removeLayer }) => {
  const handleAdd = (type, name) => {
    const data = {
      id: uuid(),
      type,
      name
    };
    addLayer(data);
  };
  return (
    <ul className="toolbar-list">
      {TOOL_ITEMS.map(tool => (
        <li className="toolbar-item" key={tool.id}>
          <button
            className="toolbar-button"
            onClick={() => handleAdd(tool.type, tool.name)}
            title={tool.name}
          >
            <i className="material-icons">{tool.icon}</i> {tool.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tools;
