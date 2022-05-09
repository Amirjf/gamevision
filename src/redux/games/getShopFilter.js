import { createAction } from 'redux-actions';

export const GetShopFilterConst = 'Games/ShopFilter';

export const GetShopFilterAction = createAction(
  GetShopFilterConst,
  (payload) => payload
);

//create reducer
export const GetShopFilterReducer = (filters, filterToAdd) => {
  const key = Object.keys(filterToAdd)[0];

  const exist = filters.find((filter) => Object.keys(filter)[0] === key);

  if (exist) {
    const findIndex = filters.findIndex((filter) => filter === exist);

    findIndex !== -1 && filters.splice(findIndex, 1);
    return [...filters, filterToAdd];
  } else {
    return [...filters, filterToAdd];
  }
};
