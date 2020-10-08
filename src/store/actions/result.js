import * as actionTypes from './actionTypes';

// synchronous Action Creator
export const saveResult = (payload) => {
  return { type: actionTypes.STORE_RESULT, id: payload.id, result: payload.result };
};

// asynchronous Action Creator which intercepts dispatch, processes sth. asynchonously, 
// then ultimately dispatches the first, synchronous AC.
export const storeResult = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(payload));
    }, 2000);
  };
};

export const deleteResult = (payload) => {
  return { type: actionTypes.DELETE_RESULT, id: payload.id };
};