/* eslint-disable no-console */
import { takeLatest, call } from 'redux-saga/effects'

import fetchConutriesService from '../../services/fetchCountryService'
import { ADD_COUNTRY } from '../../types'

function* doSomethingWhenAddingProduct(action) {
  yield console.log('From Saga', action)
  const data = yield call(fetchConutriesService.fetchCountries)
  console.log('data from saga', data)
}

export default [takeLatest(ADD_COUNTRY, doSomethingWhenAddingProduct)]
