/**
 * Created by Jebin for iLeaf Solutions Pvt.Ltd
 * on February 12, 2020
 * Sagas -  Redux saga class init.
 */

import { getProductsListSaga, getAllFlexiblities } from "./flexibilitySaga";
import { getAllDietSaga, getAllNutritionSaga } from "./dietSaga";
import * as types from "../actions/types";
import { takeEvery, all, takeLatest } from "redux-saga/effects";
  
  export default function* watch() {
    yield all([takeLatest(types.GET_BODY_PART_REQUEST, getProductsListSaga)]);
    yield all([takeLatest(types.GET_FLEXIBILITY_REQUEST, getAllFlexiblities)]);
    yield all([takeLatest(types.GET_DIET_REQUEST, getAllDietSaga)]);
    yield all([takeLatest(types.GET_NUTRITION_REQUEST, getAllNutritionSaga)]);
  }
  