import { ActionReducer } from '@/store/store.types';

const defaultState = {
  currentUser: {},
  isLogin: false,
};

export default function userReducer(
  state = defaultState,
  action: ActionReducer,
) {
  switch (action.type) {
    default:
      return state;
  }
}
