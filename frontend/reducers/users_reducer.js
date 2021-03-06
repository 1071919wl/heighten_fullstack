import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
            // return action.currentUser
        default:
            return state;    
    }
};

export default usersReducer;