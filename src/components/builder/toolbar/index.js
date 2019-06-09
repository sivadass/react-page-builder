import React, { useContext } from "react";
import Tools from "./tools";
import CommonActions from "./actions";
import { Store } from "../../../store";
import actions from "../../../store/action-types";

import "./toolbar.scss";

function Toolbar() {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  const addLayer = data => {
    return dispatch({
      type: actions.ADD_LAYER,
      payload: data
    });
  };
  const removeLayer = id => {
    return dispatch({
      type: actions.REMOVE_LAYER,
      id
    });
  };
  return (
    <div className="toolbar">
      <Tools addLayer={addLayer} removeLayer={removeLayer} />
      <CommonActions />
    </div>
  );
}

export default Toolbar;
