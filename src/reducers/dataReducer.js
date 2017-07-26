import * as types from 'constants/dataTypes';

const initialState = {
  data: [],
};

function addCurrency(arr, obj) {
  const array = arr.slice(0);
  array.push(obj)
  return array
}
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA: {
      return {
        ...state,
        data: addCurrency(state.data, action.payload.query.results.rate)
      };
    }
    default: {
      return state;
    }
  }
}
