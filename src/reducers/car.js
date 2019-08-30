const initialState = {
  wheel: "",
  color: "",
  engine: ""
};

const car = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TIRE":
      return [
        ...state,
        {
          wheel: action.wheel
        }
      ];
    case "ADD_COLOR":
      return [
        ...state,
        {
          wheel: action.color
        }
      ];
    case "ADD_MOTOR":
      return [
        ...state,
        {
          wheel: action.engine
        }
      ];
    default:
      return state;
  }
};

export default car;
