import { AxiosResponse } from 'axios';

import { AuthActionTypes, TAuthState } from '@/types/auth.types';
import { AuthActionReducer } from '@/types/store.types';
import { TUser } from '@/types/users.types';

const defaultState: TAuthState = {
  oUser: null,
  isLoggedIn: false,
};

export default function authReducer(
  state = defaultState,
  action: AuthActionReducer,
) {
  switch (action.type) {
    case AuthActionTypes.REGISTRATION:
      return {
        ...state,
        oUser: action.payload,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        oUser: action.payload,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        oUser: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

export const login = (oUser: AxiosResponse<any, TUser>) => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: oUser,
  };
};

export const registration = (oUser: AxiosResponse<any, TUser>) => {
  return {
    type: AuthActionTypes.REGISTRATION,
    payload: oUser,
  };
};

export const logout = () => {
  return {
    type: AuthActionTypes.LOGOUT,
    payload: null,
  };
};
