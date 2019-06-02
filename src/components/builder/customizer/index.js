import React from "react";
import Form from "./form";
import "./customizer.scss";

function Customizer() {
  return (
    <div className="customizer">
      <Form title="Padding" />
      <Form title="Margin" />
    </div>
  );
}

export default Customizer;
