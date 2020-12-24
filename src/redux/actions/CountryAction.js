import {
  ADD_COUNTRY,
  FETCH_COUNTRIES,
  SEARCH_COUNTRIES,
  REMOVE_COUNTRY,
  SORT_COUNTRIES,

} from '../../types'

export function addCountry(addCountry) {
  return {
    type: ADD_COUNTRY,
    payload: {
      addCountry,
    },
  }
}

export function fetchedCountry(fetchedCountry){
  return {
    type: FETCH_COUNTRIES,
    payload: {
      fetchedCountries: fetchedCountry,
    },
  }
}

export function SortCountries() {
  return {
    type: SORT_COUNTRIES,
  }
}



export function removeCountry(removeCountry) {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      removeCountry,
    },
  }
}

export function searchCountries(searchTerm) {
  return {
    type: SEARCH_COUNTRIES,
    payload: {
      searchTerm,
    },
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchCountry() {
  return async (dispatch) => {
    const resp = await fetch('https://restcountries.eu/rest/v2/all')
    const countriesData = await resp.json()
    dispatch(fetchedCountry(countriesData))
  }
}
