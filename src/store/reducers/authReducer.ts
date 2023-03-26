import { AuthActionTypes } from '@/types/auth.types';
import { ActionReducer } from '@/types/store.types';

const defaultState = {
  oUser: null,
  isLoggedIn: false,
};

export default function authReducer(
  state = defaultState,
  action: ActionReducer,
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
