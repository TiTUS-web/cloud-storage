import { TAuthState } from '@/types/auth.types';
import { TFilesState } from '@/types/files.types';
import { TUser } from '@/types/users.types';

export type ActionReducer = {
  payload: {
    token: string;
    user: TUser;
  };
  type: string;
};

export interface IState {
  auth: TAuthState;
  files: TFilesState;
}
