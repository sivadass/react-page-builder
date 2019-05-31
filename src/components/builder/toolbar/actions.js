import React from "react";

const CommonActions = () => {
  return (
    <div className="toolbar-action">
      <button className="toolbar-button">
        <i className="material-icons">undo</i> Undo
      </button>
      <button className="toolbar-button">
        <i className="material-icons">redo</i> Redo
      </button>
      <button className="toolbar-button preview">
        <i className="material-icons">visibility</i> Preview
      </button>
    </div>
  );
};

export default CommonActions;
