import { AxiosResponse } from 'axios';

import {
  TCredentialsLogin,
  TCredentialsRegistration,
} from '@/api/Auth/auth.types';
import API from '@/api/axios';

class Auth {
  protected login(oCredentials: TCredentialsLogin) {
    return new Promise((resolve, reject) => {
      if (!oCredentials) {
        reject();
      }

      API.post('auth/login', oCredentials)
        .then((token: AxiosResponse<string>) => {
          resolve(token);
          this.redirect('/files');
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  protected registration(oCredentials: TCredentialsRegistration) {
    return new Promise((resolve, reject) => {
      if (!oCredentials) {
        reject();
      }

      API.post('auth/registration', oCredentials)
        .then((token: AxiosResponse<string>) => {
          resolve(token);
          this.redirect('/files');
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  private redirect(url: string) {
    window.location.reload();
    window.location.replace(url);
  }
}

export default Auth;
