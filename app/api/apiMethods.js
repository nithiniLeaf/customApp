
import ApiConstants from "./apiConstants";
import Api from "./index";

export function getBodyPartsAPI() {
	return Api(ApiConstants.API_GET_BODY_PARTS, null, "get", null, null);
}

export function getFlexiblityListAPI() {
	return Api(ApiConstants.API_GET_FLEXIBLITIES, null, "get", null, null);
}

export function getDietsAPI() {
	return Api(ApiConstants.API_GET_DIETS, null, "get", null, null);
}

export function getNutritionAPI() {
	return Api(ApiConstants.API_GET_NUTRITION, null, "get", null, null);
}