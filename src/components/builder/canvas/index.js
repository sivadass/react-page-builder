import React, { useContext } from "react";
import { Store } from "../../../store";
import "./canvas.scss";

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
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default Canvas;
