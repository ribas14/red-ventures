const initialState = {
  wheel: {},
  color: {},
  engine: {},
  price: 0
};

const car = (state = initialState, action) => {
  switch (action.type) {
    case "DEFINE_ENGINE":
      return {
        ...state,
        engine: action.payload
      };
    case "DEFINE_COLOR":
      return {
        ...state,
        color: action.payload
      };
    case "DEFINE_WHEELS":
      return {
        ...state,
        wheel: action.payload
      };
    case "DEFINE_PRICE":
      return {
        ...state,
        price: action.payload
      };
    case "REBOOT_CAR":
      return {
        wheel: {},
        color: {},
        engine: {},
        price: 0
      };
    default:
      return state;
  }
};

export default car;
