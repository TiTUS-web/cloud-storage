import Files from '@/api/Files';
import { FilesActionTypes, TFilesState } from '@/types/files.types';
import { FilesActionReducer } from '@/types/store.types';

const oFiles: Files = new Files();

const defaultState: TFilesState = {
  sFilesDisplayMode: 'table',
  oCurrentDir: {
    path: '/',
    parentId: null,
  },

  arFiles: [],
  bFilesNotFound: true,

  bShowCreateDirModal: false,
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
    case FilesActionTypes.SET_DISPLAY_CREATE_DIR_MODAL:
      return {
        ...state,
        bShowCreateDirModal: action.payload,
      };
    case FilesActionTypes.SET_CURRENT_DIR:
      return {
        ...state,
        oCurrentDir: action.payload,
      };
    default:
      return state;
  }
}

export const setFilesMode = (sDisplayMode: string) => {
  return { type: FilesActionTypes.SET_FILES_MODE, payload: sDisplayMode };
};

export const setFiles = async () => {
  const arFiles = await oFiles.getFiles();

  return {
    type: FilesActionTypes.SET_FILES,
    payload: arFiles,
  };
};

export const setDisplayCreateDirModal = (bDisplayModal: boolean) => {
  return {
    type: FilesActionTypes.SET_DISPLAY_CREATE_DIR_MODAL,
    payload: bDisplayModal,
  };
};
