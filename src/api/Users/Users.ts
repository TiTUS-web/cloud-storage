import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import { IUser } from '@/api/Users/users.types';

class Users {
  protected getUsers() {
    return new Promise((resolve, reject) => {
      API.get('users')
        .then((data: AxiosResponse<IUser[]>) => {
          resolve(data);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }
}

export default Users;
