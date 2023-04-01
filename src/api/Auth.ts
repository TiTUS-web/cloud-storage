import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import {
  TCredentialsLogin,
  TCredentialsRegistration,
  TResponseLogin,
  TResponseRegistration,
} from '@/types/auth.types';
import Storage from '@/utils/Storage';

class Auth {
  private Storage = new Storage();
  public login(
    oCredentials: TCredentialsLogin,
  ): Promise<AxiosResponse<string>> {
    return new Promise((resolve, reject) => {
      if (!oCredentials) {
        reject();
      }

      API.post('/auth/login', oCredentials)
        .then((oResponse: AxiosResponse<any, TResponseLogin>) => {
          this.Storage.setData('token', oResponse.data.token);
          this.Storage.setData('oUser', oResponse.data.user);
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
          this.Storage.setData('token', oResponse.data.token);
          this.Storage.setData('oUser', oResponse.data.user);
          resolve(oResponse.data.user);
        })
        .catch((oErr) => {
          reject(oErr);
        });
    });
  }
}

export default Auth;
