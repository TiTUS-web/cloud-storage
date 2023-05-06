import Files from '@/api/Files';
import {
  FilesActionTypes,
  TBreadCrumb,
  TFile,
  TFilesState,
  TSort,
} from '@/types/files.types';
import { FilesActionReducer } from '@/types/store.types';

const oFiles: Files = new Files();

const defaultState: TFilesState = {
  sSearchFileName: '',
  sFilesDisplayMode: 'table',

  arCurrentOpenDirs: [],
  arBreadCrumbs: [],
  iLastCurrentOpenDir: null,

  arFiles: [],
  bFilesNotFound: true,

  bShowCreateDirModal: false,

  arSort: [],
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
    case FilesActionTypes.SET_SEARCH_FILE_NAME:
      return {
        ...state,
        sSearchFileName: action.payload,
      };
    case FilesActionTypes.SET_CURRENT_OPEN_FILE:
      return {
        ...state,
        arCurrentOpenDirs: [...state.arCurrentOpenDirs, action.payload.id],
        arBreadCrumbs: [
          ...state.arBreadCrumbs,
          { id: action.payload.id, name: action.payload.name },
        ],
        iLastCurrentOpenDir: action.payload.id,
      };
    case FilesActionTypes.BACK_CURRENT_OPEN_FILE:
      return {
        ...state,
        arCurrentOpenDirs: [...action.payload.dirs],
        arBreadCrumbs: [...action.payload.breadCrumbs],
        iLastCurrentOpenDir: action.payload.id,
      };
    case FilesActionTypes.SET_SORT:
      return {
        ...state,
        arSort: action.payload,
      };
    default:
      return state;
  }
}

export const setFilesMode = (sDisplayMode: string) => {
  return { type: FilesActionTypes.SET_FILES_MODE, payload: sDisplayMode };
};

export const setFiles = async (iDirId: number | null, arSort: TSort[]) => {
  const arFiles: TFile[] = await oFiles.getFiles(iDirId, arSort);

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

export const setCurrentOpenFile = (oDir: { id: number; name: string }) => {
  return {
    type: FilesActionTypes.SET_CURRENT_OPEN_FILE,
    payload: oDir,
  };
};

export const backCurrentOpenFile = (
  arCurrentOpenDirs: number[] | [],
  arBreadCrumbs: TBreadCrumb[] | [],
  iCurrentOpenDir: number,
) => {
  return {
    type: FilesActionTypes.BACK_CURRENT_OPEN_FILE,
    payload: {
      dirs: arCurrentOpenDirs,
      breadCrumbs: arBreadCrumbs,
      id: iCurrentOpenDir,
    },
  };
};

export const setSearchFileName = (sSearchFileName: string) => {
  return {
    type: FilesActionTypes.SET_SEARCH_FILE_NAME,
    payload: sSearchFileName,
  };
};

export const setSort = (arSort: TSort[] | object[]) => {
  return {
    type: FilesActionTypes.SET_SORT,
    payload: arSort,
  };
};
