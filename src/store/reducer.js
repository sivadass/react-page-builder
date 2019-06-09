import actions from "./action-types";

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_LAYER:
      return { ...state, layers: [...state.layers, action.payload] };
    case actions.UPDATE_LAYER:
      return { ...state, layers: action.payload };
    case actions.REMOVE_LAYER:
      return {
        ...state,
        layers: state.layers.filter(layer => layer.id !== action.id)
      };
    default:
      return state;
  }
}

export default reducer;
