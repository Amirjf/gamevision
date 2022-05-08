import { createAction } from 'redux-actions';

export const GetShopFilterConst = 'Games/ShopFilter';

export const GetShopFilterAction = createAction(
  GetShopFilterConst,
  (payload) => payload
);

//create reducer
export const GetShopFilterReducer = (filters, filterToAdd) => {
  //TODO : find existing filter and replace the value

  // var foundIndex = filters.findIndex((x) => x.y == item.id);
  // filters[foundIndex] = item;

  return [
    ...filters,
    {
      ...filterToAdd,
    },
  ];
};
