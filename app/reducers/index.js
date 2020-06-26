import * as flexibilyReducer from "./flexibilityReducer";
import * as nutritionReducer from "./nutritionReducer";
import * as loadingReducer from "./loadingReducer";

export default Object.assign(flexibilyReducer, loadingReducer , nutritionReducer);