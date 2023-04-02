import { FilesActionTypes, TFilesState } from '@/types/files.types';
import { FilesActionReducer } from '@/types/store.types';

const defaultState: TFilesState = {
  sFilesDisplayMode: 'table',
  arFiles: [],
  bFilesNotFound: true,
};

export default function fileReducer(
  state = defaultState,
  action: FilesActionReducer,
) {
  switch (action.type) {
    case FilesActionTypes.SET_FILES_MODE:
      return {
        ...state,
        sFilesDisplayMode: action.payload,
      };
    case FilesActionTypes.SET_FILES:
      return {
        ...state,
        arFiles: action.payload,
        bFilesNotFound: action.payload.length === 0,
      };
    default:
      return state;
  }
}
