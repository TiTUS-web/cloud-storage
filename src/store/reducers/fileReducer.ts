import { TFilesState } from '@/types/files.types';
import { ActionReducer } from '@/types/store.types';

const defaultState: TFilesState = {
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
