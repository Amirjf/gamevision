import { createAction } from 'redux-actions';

export const SetGamesSearchRdxConst = 'Search/SetGamesSearch';

export const SetGamesSearchAction = createAction(
  SetGamesSearchRdxConst,
  (payload) => payload
);

export const SetGamesSearchReducer = (state, action) => {
  return action.payload;
};
