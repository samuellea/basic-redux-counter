import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      console.log(action.result, '<---');
      return { ...state, results: [...state.results, { id: action.id, val: action.result }] }
    case actionTypes.DELETE_RESULT:
      let newResults = state.results.filter(result => result.id !== action.id)
      return { ...state, results: newResults }
  };
  return state;
};

export default resultReducer;