import { SetGamesRdxConst, SetGamesReducer } from "./setGames";
import { FilteredGamesReducer, FilteredGamesRdxConst } from "./filteredGames";
import {
  ActiveGameFilterRdxConst,
  ActiveGameFilterReducer,
} from "./activeGameFilter";

export const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case SetGamesRdxConst:
      return SetGamesReducer(state, action);
    default:
      return state;
  }
};
export const activeFilterReducer = (
  state = "&dates=2021-01-01,2021-12-31&ordering=-added",
  action
) => {
  switch (action.type) {
    case ActiveGameFilterRdxConst:
      return ActiveGameFilterReducer(state, action);
    default:
      return state;
  }
};
export const filteredGamesReducer = (state = [], action) => {
  switch (action.type) {
    case FilteredGamesRdxConst:
      return FilteredGamesReducer(state, action);
    default:
      return state;
  }
};
