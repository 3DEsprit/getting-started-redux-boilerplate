import * as types from '../actions/ActionTypes'
import initialState from './initialState';

export default function counterReducer(state = initialState, action) {
  switch(action.type) {
    case types.COUNTER_UP:
      return {
        total: state.total + 1
      }
    case types.COUNTER_DOWN:
      return {
        total: state.total - 1
      }
    default:
      return state;
  }
}