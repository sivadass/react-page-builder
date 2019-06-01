import React from "react";

const initialPara =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

const Paragraph = ({ text = initialPara }) => {
  return <p>{text}</p>;
};

export default Paragraph;
