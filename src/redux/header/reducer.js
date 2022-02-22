const initState = {
  toggleSearch: false,
  inputValue: "",
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_INPUT_CHECK_HEADER":
      return { ...state, toggleSearch: !state.toggleSearch };
    case "VALUE_INPUT_HEADER":
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};
