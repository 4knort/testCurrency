import * as types from 'constants/dataTypes';

const initialState = {
  data: [],
};

function addCurrency(arr, obj) {
  const array = arr.slice(0);
  array.push(obj);
  return array;
}

function deleteCurrency(arr, id) {
  const array = arr.filter(item => {
    if (item.id !== id) {
      return item;
    }
  });

  return array;
}
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA: {
      return {
        ...state,
        data: addCurrency(state.data, action.payload.query.results.rate),
      };
    }
    case types.DELETE_DATA: {
      return {
        ...state,
        data: deleteCurrency(state.data, action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
