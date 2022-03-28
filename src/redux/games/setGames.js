import { createAction } from "redux-actions";

export const SetGamesRdxConst = "Games/SetGames";

export const SetGamesAction = createAction(
  SetGamesRdxConst,
  (payload) => payload
);

// create reducer
export const SetGamesReducer = (state, action) => {
  return action.payload;
};
