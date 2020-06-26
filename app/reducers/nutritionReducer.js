/**
 * Created by Nithin for iLeaf Solutions Pvt.Ltd
 * on June 11, 2020
 * Flexiblities List Reducer - Store the list of products in the app
 */

import createReducer from "../lib/createReducer";
import * as types from "../actions/types";

const initialState = {
	dietList: [],
	nutritionList: [],
};

export const nutritionReducer = createReducer(initialState, {
	[types.GET_DIET_SUCCESS](state, actions) {
		return {
			...state,
			dietList: actions.response,
		};
	},
	[types.GET_NUTRITION_SUCCESS](state, actions) {
		return {
			...state,
			nutritionList: actions.response,
		};
	},
});
