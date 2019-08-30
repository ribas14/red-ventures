import { combineReducers } from "redux";
import car from "./car";
import jsonObj from "./jsonObj";

export default combineReducers({
  car: car,
  jsonObj: jsonObj
});
