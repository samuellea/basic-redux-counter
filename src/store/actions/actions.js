export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => { // this is an Action Creator
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const add = (payload) => {
  return { type: ADD, value: payload };
};

export const subtract = (payload) => {
  return { type: SUBTRACT, value: payload };
};

// synchronous Action Creator
export const saveResult = (payload) => {
  return { type: STORE_RESULT, id: payload.id, result: payload.result };
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
  return { type: DELETE_RESULT, id: payload.id };
};