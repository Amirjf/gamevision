import { ShowMoreReducer, ShowMoreInfoRdxConst } from "./showMore";
import { ToggleNavbarReducer, ToggleNavbarRdxConst } from "./toggleNavbar";

export const showMoreReducer = (state = 8, action) => {
  switch (action.type) {
    case ShowMoreInfoRdxConst:
      return ShowMoreReducer(state, action);
    default:
      return state;
  }
};
export const toggleNavbarReducer = (state = false, action) => {
  switch (action.type) {
    case ToggleNavbarRdxConst:
      return ToggleNavbarReducer(state, action);
    default:
      return state;
  }
};
