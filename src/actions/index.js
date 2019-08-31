import axios from "axios";

export const fetchJson = () => async dispatch => {
  axios.get(process.env.REACT_APP_API_BASE).then(response => {
    console.log(response.data.data);
    dispatch({
      type: "STORE_INFO_JSON",
      response: response.data.data
    });
    dispatch({
      type: "DEFINE_ENGINE",
      payload: response.data.data.engine.items[0]
    });
    dispatch({
      type: "DEFINE_COLOR",
      payload: response.data.data.color.items[0]
    });
    dispatch({
      type: "DEFINE_WHEELS",
      payload: response.data.data.wheels.items[0]
    });
    dispatch({
      type: "DEFINE_PRICE",
      payload: response.data.data.price
    });
  });
};

export const defineEngine = engine => dispatch => {
  dispatch({
    type: "DEFINE_ENGINE",
    payload: engine
  });
};

export const definePrice = price => dispatch => {
  console.log(price);
  dispatch({
    type: "DEFINE_PRICE",
    payload: price
  });
};

export const defineColor = color => dispatch => {
  dispatch({
    type: "DEFINE_COLOR",
    payload: color
  });
};

export const defineWheels = wheels => dispatch => {
  dispatch({
    type: "DEFINE_WHEELS",
    payload: wheels
  });
};
