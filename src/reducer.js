export const initialState = {
  loading: false,
  user: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, user: action.payload, error: "", loading: false };
    case "FAIL":
      return { ...state, user: "", error: action.payload, loading: false };
    default:
      break;
  }
};
