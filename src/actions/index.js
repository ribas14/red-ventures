import axios from "axios";

export const fetchJson = () => async dispatch => {
  axios.get(process.env.REACT_APP_API_BASE).then(response => {
    console.log(response.data.data);
    dispatch({
      type: "STORE_INFO_JSON",
      response: response.data.data
    });
  });
};

export const defineWheel = wheel => dispatch => {
  dispatch({
    type: ""
  });
};
