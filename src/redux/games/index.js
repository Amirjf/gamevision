import { SetGamesRdxConst, SetGamesReducer } from './setGames';
import { FilteredGamesReducer, FilteredGamesRdxConst } from './filteredGames';
import {
  ActiveGameFilterRdxConst,
  ActiveGameFilterReducer,
} from './activeGameFilter';
import { GetShopFilterConst, GetShopFilterReducer } from './getShopFilter';

const INITIAL_STATE = {
  filters: [],
};

export const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case SetGamesRdxConst:
      return SetGamesReducer(state, action);
    default:
      return state;
  }
};
export const activeFilterReducer = (state = 'popular', action) => {
  switch (action.type) {
    case ActiveGameFilterRdxConst:
      return ActiveGameFilterReducer(state, action);
    default:
      return state;
  }
};
export const getShopFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GetShopFilterConst:
      return {
        ...state,
        filters: GetShopFilterReducer(state.filters, action.payload),
      };
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
