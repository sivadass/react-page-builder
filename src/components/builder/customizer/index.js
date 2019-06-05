import React from "react";
import Form from "./form";
import "./customizer.scss";

function Customizer() {
  return (
    <div className="customizer">
      <Form title="Padding" />
      <Form title="Margin" />
      <Form title="Border Width" />
    </div>
  );
}

export default Customizer;
