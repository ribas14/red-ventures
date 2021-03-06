const initialState = {
  carJsonDefault: {},
  loading: true
};

const jsonObj = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_INFO_JSON":
      return { ...state, carJsonDefault: action.response, loading: false };
    default:
      return state;
  }
};

export default jsonObj;
