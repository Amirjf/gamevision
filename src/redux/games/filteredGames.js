import { createAction } from "redux-actions";

export const FilteredGamesRdxConst = "Games/FilteredGames";

export const FilteredGamesAction = createAction(
  FilteredGamesRdxConst,
  (payload) => payload
);

//create reducer
export const FilteredGamesReducer = (state, action) => {
  return action.payload;
};
