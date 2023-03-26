import { ActionReducer } from '@/types/store.types';

const defaultState = {
  files: [],
};

export default function fileReducer(
  state = defaultState,
  action: ActionReducer,
) {
  switch (action.type) {
    default:
      return state;
  }
}
