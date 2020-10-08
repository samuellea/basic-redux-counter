import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => { // again, another helper function that helps you create leaner reducer method, as below
  let newResults = state.results.filter(result => result.id !== action.id)
  return updateObject(state, { results: newResults });
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return { ...state, results: [...state.results, { id: action.id, val: action.result }] }
    case actionTypes.DELETE_RESULT: return deleteResult(state, action); // making use of helper function to make switch statement very lean. Could apply to STORE_RESULT too.
  };
  return state;
};

export default resultReducer;