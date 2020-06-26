import * as types from "./types";

export function getDiet() {
	return {
		type: types.GET_DIET_REQUEST,
	};
}

export function getDietResponse(response) {
	return {
		type: types.GET_DIET_SUCCESS,
		response,
	};
}

export function getNutrition(getNutritionCallback) {
	return {
		type: types.GET_NUTRITION_REQUEST,
		getNutritionCallback,
	};
}

export function getNutritionResponse(response) {
	return {
		type: types.GET_NUTRITION_SUCCESS,
		response,
	};
}
