import React, { useContext } from "react";
import { Store } from "../../../store";
import Title from "./elements/title";
import Paragraph from "./elements/paragraph";
import Form from "./elements/form";
import Image from "./elements/image";
import Section from "./elements/section";
import "./canvas.scss";

const Element = ({ type }) => {
  switch (type) {
    case "title":
      return <Title />;
    case "paragraph":
      return <Paragraph />;
    case "form":
      return <Form />;
    case "image":
      return <Image />;
    case "section":
      return <Section />;
    default:
      return <Title />;
  }
};

function Canvas() {
  const {
    state: { layers },
    dispatch
  } = useContext(Store);
  return (
    <div className="canvas">
      {layers.map(item => {
        console.log(item);
        return (
          <div className="layer-item" key={item.id}>
            <Element type={item.type} />
          </div>
        );
      })}
    </div>
  );
}

export default Canvas;
