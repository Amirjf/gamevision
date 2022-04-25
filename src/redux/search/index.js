import {
  SetGamesSearchRdxConst,
  SetGamesSearchReducer,
} from './setGamesSearch';
import {
  SetProductsSearchReducer,
  SetProductsSearchRdxConst,
} from './setProductsSearch';

const INITIAL_STATE = {
  products: [],
  games: [],
};

export const productsSearchReducer = (
  state = INITIAL_STATE.products,
  action
) => {
  switch (action.type) {
    case SetProductsSearchRdxConst: {
      return SetProductsSearchReducer(state, action);
    }

    default:
      return state;
  }
};

export const gamesSearchReducer = (state = INITIAL_STATE.games, action) => {
  switch (action.type) {
    case SetGamesSearchRdxConst: {
      return SetGamesSearchReducer(state, action);
    }

    default:
      return state;
  }
};
