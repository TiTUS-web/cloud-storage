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
  private oStorage = new Storage();
  public oUser = this.oStorage.getData('oUser') || null;

  public login(
    oCredentials: TCredentialsLogin,
  ): Promise<AxiosResponse<string>> {
    return new Promise((resolve, reject) => {
      if (!oCredentials) {
        reject();
      }

      API.post('/auth/login', oCredentials)
        .then((oResponse: AxiosResponse<any, TResponseLogin>) => {
          this.oStorage.setData('token', oResponse.data.token);
          this.oStorage.setData('oUser', oResponse.data.user);
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
          this.oStorage.setData('token', oResponse.data.token);
          this.oStorage.setData('oUser', oResponse.data.user);
          resolve(oResponse.data.user);
        })
        .catch((oErr) => {
          reject(oErr);
        });
    });
  }

  public logout(): void {
    this.oStorage.removeAllData();
  }
}

export default Auth;
