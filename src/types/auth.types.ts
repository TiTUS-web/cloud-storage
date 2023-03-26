import { TUser } from '@/types/users.types';

export type TCredentialsLogin = {
  email: string;
  password: string;
};

export type TCredentialsRegistration = {
  username: string;
  email: string;
  password: string;
};

export type TResponseLogin = {
  token: string;
  user: TUser;
};

export type TResponseRegistration = {
  token: string;
  user: TUser;
};

export enum AuthActionTypes {
  REGISTRATION = 'REGISTRATION',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}
