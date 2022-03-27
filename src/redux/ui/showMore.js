import { createAction } from "redux-actions";

export const ShowMoreInfoRdxConst = "Ui/ShowMore";

export const ShowMoreAction = createAction(
  ShowMoreInfoRdxConst,
  (payload) => payload
);

export const ShowMoreReducer = (state, action) => {
  return action.payload;
};
