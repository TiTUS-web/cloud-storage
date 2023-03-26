import { TUser } from '@/types/users.types';

export type ActionReducer = {
  payload: {
    token: string;
    user: TUser;
  };
  type: string;
};
