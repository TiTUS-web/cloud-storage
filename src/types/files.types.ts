export type TFilesState = {
  sFilesDisplayMode: string;
  oCurrentPosition: {
    path: string;
    parentId: number | null;
  };

  arFiles: [];
  bFilesNotFound: boolean;

  bShowCreateDirModal: boolean;
};

export type TFile = {
  size?: number;
  path: string;
  date?: string;
  childIds?: number[] | [];
  id?: number;
  name: string;
  type: string;
  format: string;
  userId: number;
  parentId: number | null;
  updatedAt?: string;
  createdAt?: string;
  access: string;
};

export type TDisplayProps = {
  searchFileName: string;
  handleDeleteFile: Function;
};

export type TCurrentPosition = {
  path: string;
  parentId: number | null;
};

export enum FilesActionTypes {
  SET_FILES_MODE = 'SET_FILES_MODE',
  SET_FILES = 'SET_FILES',
  SHOW_CREATE_DIR_MODAL = 'SHOW_CREATE_DIR_MODAL',
}
