/**
 * Created by Nithin for iLeaf Solutions Pvt.Ltd
 * on June 11, 2020
 * Flexiblities List Reducer - Store the list of products in the app
 */

import createReducer from "../lib/createReducer";
import * as types from "../actions/types";

const initialState = {
	bodyPartsList: [],
	flexiblityList: [],
};

export const flexibilyReducer = createReducer(initialState, {
	[types.GET_BODY_PART_SUCCESS](state, actions) {
		return {
			...state,
			bodyPartsList: actions.response,
		};
	},
	[types.GET_FLEXIBILITY_SUCCESS](state, actions) {
		return {
			...state,
			flexiblityList: actions.response,
		};
	},
});
