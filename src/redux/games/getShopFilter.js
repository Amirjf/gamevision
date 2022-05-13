import { createAction } from 'redux-actions';

export const GetShopFilterConst = 'Games/ShopFilter';

export const GetShopFilterAction = createAction(
  GetShopFilterConst,
  (payload) => payload
);

//create reducer
export const GetShopFilterReducer = (filters, filterToAdd) => {
  return [...filters, filterToAdd];
};
