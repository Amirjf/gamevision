import { SetGamesRdxConst, SetGamesReducer } from './setGames';
import { FilteredGamesReducer, FilteredGamesRdxConst } from './filteredGames';
import {
  ActiveGameFilterRdxConst,
  ActiveGameFilterReducer,
} from './activeGameFilter';
import { GetShopFilterConst, GetShopFilterReducer } from './getShopFilter';

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
export const getShopFilterReducer = (
  state = 'dates=2021-01-01,2022-04-20',
  action
) => {
  switch (action.type) {
    case GetShopFilterConst:
      return GetShopFilterReducer(state, action);
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
