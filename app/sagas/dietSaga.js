/**
 * Created by Nithin for iLeaf Solutions Pvt.Ltd
 * on June 11, 2020
 * DietSaga - handles Diets
 */

import { showSingleAlert } from "../config/common";
import { put, call, select } from "redux-saga/effects";
import * as loadingActions from "../actions/loadingActions";
import * as nutritionActions from "../actions/nutritionActions";
import { getDietsAPI, getNutritionAPI } from "../api/apiMethods";

export function* getAllDietSaga() {
	yield put(loadingActions.enableLoader());

	try {
		const response = yield call(getDietsAPI);
		console.log("API RESPONSE OF GET diets ", response);
		yield put(loadingActions.disableLoader({}));

		if (response) {
			yield put(nutritionActions.getDietResponse(response.nutritions));
		}
	} catch (error) {
		console.log("API ERROR!!!!", error);
		showSingleAlert("API_Failed");
		yield put(loadingActions.disableLoader({}));
	}
}

export function* getAllNutritionSaga(action) {
	yield put(loadingActions.enableLoader());

	try {
		const response = yield call(getNutritionAPI);
		console.log("API RESPONSE OF GET NUTRITIONS ", response);
		yield put(loadingActions.disableLoader({}));

		if (response) {
			yield put(nutritionActions.getNutritionResponse(response.nutrition));
			if (action.getNutritionCallback) {
				action.getNutritionCallback();
			}
		}
	} catch (error) {
		console.log("API ERROR!!!!", error);
		showSingleAlert("API_Failed");
		yield put(loadingActions.disableLoader({}));
	}
}


