import {CREATE_EVENT} from '../constants/ActionTypes';

export function createEvent(text) {
  return {
    type: CREATE_EVENT,
    text
  }
}
