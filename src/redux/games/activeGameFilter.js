import { createAction } from "redux-actions";

export const ActiveGameFilterRdxConst = "Products/ActiveGameFilter";

export const ActiveGameFilterAction = createAction(
  ActiveGameFilterRdxConst,
  (payload) => payload
);

export const ActiveGameFilterReducer = (state, action) => {
  return action.payload;
};
