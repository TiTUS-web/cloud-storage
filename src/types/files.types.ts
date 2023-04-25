export type TFilesState = {
  sFilesDisplayMode: string;
  oCurrentDir: {
    path: string;
    parentId: number | null;
  };

  arFiles: [];
  bFilesNotFound: boolean;

  bShowCreateDirModal: boolean;
};

export type TFile = {
  size: number;
  path: string;
  date: string;
  id: number;
  name: string;
  type: string;
  format: string;
  userId: number;
  parentId: number | null;
  updatedAt: string;
  createdAt: string;
  access: string;
};

export type TFileCreation = {
  name: string;
  type: string;
  format: string;
  access: string;
  path: string;
  userId: number;
  parentId: number | null;
};

export type TDisplayProps = {
  searchFileName: string;
  handleDeleteFile: Function;
};

export type TCurrentPosition = {
  path: string;
  parentId: number | null;
};

export type TCurrentDir = {
  path: string;
  parentId: number;
};

export enum FilesActionTypes {
  SET_FILES_MODE = 'SET_FILES_MODE',
  SET_FILES = 'SET_FILES',
  SET_DISPLAY_CREATE_DIR_MODAL = 'SET_DISPLAY_CREATE_DIR_MODAL',
  SET_CURRENT_DIR = 'SET_CURRENT_DIR',
}
