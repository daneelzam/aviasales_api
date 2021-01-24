import { AUTH_SUCSESSFULLY, FETCH_USERS, LOGOUT } from '../types';

export const authSucsessAC = (user) => ({ type: AUTH_SUCSESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });

export const fetchUsersAC = (user) => ({ type: FETCH_USERS, payload: user });
