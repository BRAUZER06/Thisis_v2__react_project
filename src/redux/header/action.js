export function toggle_InputCheckHeader() {
  return {
    type: "TOGGLE_INPUT_CHECK_HEADER",
  };
}

export function value_InputHeader(value) {
  return {
    type: "VALUE_INPUT_HEADER",
    payload: value,
  };
}
