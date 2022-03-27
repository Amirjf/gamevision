import { createAction } from "redux-actions";

export const ToggleNavbarRdxConst = "Ui/ToggleNavbar";

export const ToggleNavbarAction = createAction(
  ToggleNavbarRdxConst,
  (payload) => payload
);

export const ToggleNavbarReducer = (state, action) => {
  return action.payload;
};
