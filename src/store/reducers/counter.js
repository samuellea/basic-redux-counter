import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.value }
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value }) // example of using a utility function to make reducer leaner, if desired.
  };
  return state;
};

export default counterReducer;