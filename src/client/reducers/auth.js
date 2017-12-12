import { FETCH_CURRENT_USER, LOGIN_USER, SEND_EMAIL } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER :
      return action.payload.data || false;
    case LOGIN_USER :
      return action.payload.data || false;
    case SEND_EMAIL :
      return action.payload.data || false;
    default :
      return state;
  }
}