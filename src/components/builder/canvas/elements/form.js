import React from "react";

const Form = ({ text }) => {
  return (
    <form>
      <h3>{text}</h3>
      <input placeholder="Full Name" />
      <input placeholder="E-mail" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
