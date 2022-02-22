const initState = {
  openSideBar: false,
  openHomeMenu: false,
  openMyProfile: false,
  createRecord: false,
  exiteMyProfile: false,
};

export function sidebarReducer(state = initState, action) {
  switch (action.type) {
    
    case "TOGGLE_MENU_NAV_BAR":
      return { ...state, openSideBar: !state.openSideBar };


    case "HOME_MENU_NAV":
      return { ...state, openHomeMenu: !state.openHomeMenu };


    case "MY_PROFILE_MENU_NAV":
      return { ...state, openMyProfile: !state.openMyProfile };


    case "CREATE_RECORD_MENU_NAV":
      return { ...state, createRecord: !state.createRecord };


    case "EXITE_PROFILE_MENU_NAV":
      return { ...state, exiteMyProfile: !state.exiteMyProfile };


    case "CLOSED_MENU_NAV":
      return { ...(state.openSideBar = false) };


    default:
      return state;
  }
}
