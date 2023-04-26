export type TFilesState = {
  sFilesDisplayMode: string;
  oCurrentDir: TCurrentDir;

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
  handleOpenDir: Function;
};

export type TCurrentDir = {
  currentPath: string;
  lastPath: string;
  parentId: number | null;
};

export enum FilesActionTypes {
  SET_FILES_MODE = 'SET_FILES_MODE',
  SET_FILES = 'SET_FILES',
  SET_DISPLAY_CREATE_DIR_MODAL = 'SET_DISPLAY_CREATE_DIR_MODAL',
  SET_CURRENT_DIR = 'SET_CURRENT_DIR',
}
