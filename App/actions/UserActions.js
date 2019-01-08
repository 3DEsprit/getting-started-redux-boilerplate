import fetch from 'node-fetch'

export function userFetch() {
  return dispatch => {
  dispatch(userFetchStart());
  dispatch(progressChange(20));
    fetch('https://api.github.com/users')
    .then(res => res.json()).then(result => {
      dispatch(progressChange(100));
      dispatch(userFetchSuccess(result));
    }).catch(error => {
      dispatch(createError(error.message));
    })
  }
}

export function userFetchStart() {
  return { type: 'USER_FETCH_START' }
}

export function userFetchSuccess(data) {
  return { type: 'USER_FETCH_SUCCESS', data }
}

export function progressChange(data) {
  return { type: 'USER_PROGRESS', data }
}

export function createError(error) {
  return dispatch => {
    dispatch(userError())
    dispatch(callError(error))
  }
}

export function userError() {
  return { type: 'CALL_USER_ERROR' }
}

export function callError(error) {
  return { type: 'CALL_ERROR', error }
}