import { createAction } from "redux-actions";

export const ActiveCategoryRdxConst = "Products/ActiveCategory";

export const ActiveCategoryAction = createAction(
  ActiveCategoryRdxConst,
  (payload) => payload
);

export const ActiveCategoryReducer = (state, action) => {
  return action.payload;
};
