import { createAction } from 'redux-actions';

export const SetProductsSearchRdxConst = 'Search/SetProductsSearch';

export const SetProductsSearchAction = createAction(
  SetProductsSearchRdxConst,
  (payload) => payload
);

// create reducer
export const SetProductsSearchReducer = (state, action) => {
  return action.payload;
};
