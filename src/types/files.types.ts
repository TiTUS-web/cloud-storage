export type TFilesState = {
  sFilesDisplayMode: string;

  arFiles: [];
  bFilesNotFound: boolean;
};

export type TFile = {
  size: number;
  path: string;
  date: string;
  childIds: number[] | [];
  id: number;
  name: string;
  type: string;
  format: string;
  userId: number;
  parentId: number | null;
  updatedAt: string;
  createdAt: string;
  accessLink: null;
};

export type TDisplayProps = {
  searchFileName: string;
};

export enum FilesActionTypes {
  SET_FILES_MODE = 'SET_FILES_MODE',
  SET_FILES = 'SET_FILES',
}
