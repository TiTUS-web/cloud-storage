import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import {
  TCredentialsLogin,
  TCredentialsRegistration,
  TResponseLogin,
  TResponseRegistration,
} from '@/types/auth.types';

class Auth {
  public login(
    oCredentials: TCredentialsLogin,
  ): Promise<AxiosResponse<string>> {
    return new Promise((resolve, reject) => {
      if (!oCredentials) {
        reject();
      }

      API.post('/auth/login', oCredentials)
        .then((oResponse: AxiosResponse<any, TResponseLogin>) => {
          localStorage.setItem('token', oResponse.data.token);
          resolve(oResponse.data.user);
        })
        .catch((oErr) => {
          reject(oErr);
        });
    });
  }

  public registration(
    oCredentials: TCredentialsRegistration,
  ): Promise<AxiosResponse<string>> {
    return new Promise((resolve, reject) => {
      if (!oCredentials) {
        reject();
      }

      API.post('/auth/registration', oCredentials)
        .then((oResponse: AxiosResponse<any, TResponseRegistration>) => {
          localStorage.setItem('token', oResponse.data.token);
          resolve(oResponse.data.user);
        })
        .catch((oErr) => {
          reject(oErr);
        });
    });
  }
}

export default Auth;
