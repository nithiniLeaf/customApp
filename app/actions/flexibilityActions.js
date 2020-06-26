import * as types from "./types";

export function getBodyParts() {
	return {
		type: types.GET_BODY_PART_REQUEST,
	};
}

export function getBodyPartsResponse(response) {
	return {
		type: types.GET_BODY_PART_SUCCESS,
		response,
	};
}

export function getFlexiblity() {
	return {
		type: types.GET_FLEXIBILITY_REQUEST,
	};
}

export function getFlexiblityResponse(response) {
	return {
		type: types.GET_FLEXIBILITY_SUCCESS,
		response,
	};
}