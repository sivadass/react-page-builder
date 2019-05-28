import React from "react";
import "./toolbar.scss";
import { TOOL_ITEMS } from "./constants";

function Toolbar() {
  return (
    <div className="toolbar">
      <h3 className="title">Tools</h3>
      <ul className="toolbar-list">
        {TOOL_ITEMS.map(tool => (
          <li className="toolbar-item" key={tool.id}>
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

export default Toolbar;
