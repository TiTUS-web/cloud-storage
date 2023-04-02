import { AuthActionTypes, TAuthState } from '@/types/auth.types';
import { AuthActionReducer } from '@/types/store.types';

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
