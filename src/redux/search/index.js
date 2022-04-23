import {
  SetProductsSearchReducer,
  SetProductsSearchRdxConst,
} from './setProductsSearch';

export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SetProductsSearchRdxConst: {
      return SetProductsSearchReducer(state, action);
    }
    default:
      return state;
  }
};
