import React from "react";

const Form = ({ title }) => {
  return (
    <form className="property-form">
      <h4>{title}</h4>
      <div className="inline-field">
        <label>Top</label>
        <input type="number" placeholder="8px" />
      </div>
      <div className="inline-field">
        <label>Right</label>
        <input type="number" placeholder="8px" />
      </div>
      <div className="inline-field">
        <label>Bottom</label>
        <input type="number" placeholder="8px" />
      </div>
      <div className="inline-field">
        <label>Left</label>
        <input type="number" placeholder="8px" />
      </div>
    </form>
  );
};

export default Form;
