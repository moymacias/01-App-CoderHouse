import { BREADS } from "../../data/bread";
import { SELECTED_BREAD, FILTERED_BREAD } from "../actions/bread.action";

const initialState = {
  breads: BREADS,
  filteredBread: [],
  selected: null,
};

const BreadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_BREAD:
      return {
        ...state,
        selected: state.breads.find((bread) => bread.id === action.breadID),
      };
    case FILTERED_BREAD:
      return {
        ...state,
        filteredBread: state.breads.filter(
          (bread) => bread.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default BreadReducer;
