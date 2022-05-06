import { createAction } from 'redux-actions';

export const GetShopFilterConst = 'Games/ShopFilter';

export const GetShopFilterAction = createAction(
  GetShopFilterConst,
  (payload) => payload
);

//create reducer
export const GetShopFilterReducer = (state, action) => {
  return action.payload;
};
