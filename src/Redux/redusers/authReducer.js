import { AUTH_SUCSESSFULLY, LOGOUT } from '../types';

const preloadedState = { isAuth: false, user: { email: '', username: '' } };

const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case AUTH_SUCSESSFULLY:
      return {
        ...state,
        isAuth: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: { email: ' ', username: ' ' }
      };
    default:
      return state;
  }
};

export default authReducer;
