const initState = {
  fullName: "",
  password: "",
  email: "",
};

export function avtoRegRefucer(state = initState, action) {
  switch (action.type) {
    case "REG_AUTO_VALUE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
}
