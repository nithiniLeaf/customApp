/**
 * Created by Nithin for iLeaf Solutions Pvt.Ltd
 * on June 11, 2020
 * FlexibilitySaga - handles flexibity and body parts
 */

import { showSingleAlert } from "../config/common";
import { put, call, select } from "redux-saga/effects";
import * as loadingActions from "../actions/loadingActions";
import * as flexibilityActions from "../actions/flexibilityActions";
import { getBodyPartsAPI, getFlexiblityListAPI } from "../api/apiMethods";

export function* getProductsListSaga() {
	yield put(loadingActions.enableLoader());

	try {
		const response = yield call(getBodyPartsAPI);
		console.log("API RESPONSE OF GET flexibilitytypes ", response);
		yield put(loadingActions.disableLoader({}));

		if (response) {
			yield put(flexibilityActions.getBodyPartsResponse(response.flexibilitytypes));
		}
	} catch (error) {
		console.log("API ERROR!!!!", error);
		showSingleAlert("API_Failed");
		yield put(loadingActions.disableLoader({}));
	}
}

export function* getAllFlexiblities() {
	yield put(loadingActions.enableLoader());
	try {
		const response = yield call(getFlexiblityListAPI);
		console.log("API RESPONSE OF GET flexi list ", response);
		if (response) {
			yield put(flexibilityActions.getFlexiblityResponse(response.flexibilities));
		}
	} catch (error) {
		console.log("API ERROR!!!!", error);
		showSingleAlert("API_Failed");
		yield put(loadingActions.disableLoader({}));
	}
}
