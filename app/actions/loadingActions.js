/**
 * Created by Nithin
 * on June 11, 2020
 * Loading - Actions for loading status
 */

import * as types from "./types";

export function enableLoader() {
	return {
		type: types.ENABLE_LOADER,
	};
}

export function disableLoader() {
	return {
		type: types.DISABLE_LOADER,
	};
}
