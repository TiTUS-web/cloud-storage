import { TAuthState } from '@/types/auth.types';
import { TFilesState } from '@/types/files.types';
import { TUser } from '@/types/users.types';

export type AuthActionReducer = {
  payload: {
    token: string;
    user: TUser;
  };
  type: string;
};

export type FilesActionReducer = {
  payload: any;
  type: string;
};

export interface IState {
  auth: TAuthState;
  files: TFilesState;
}
