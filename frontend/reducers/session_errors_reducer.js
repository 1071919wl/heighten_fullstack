import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions'; 
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'; 

import {REMOVE_SESSION_ERRORS} from '../actions/session_actions'; 

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;