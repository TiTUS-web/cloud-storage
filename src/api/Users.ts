import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import { TUser } from '@/types/users.types';

class Users {
  protected getUsers() {
    return new Promise((resolve, reject) => {
      API.get('users')
        .then((data: AxiosResponse<TUser[]>) => {
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
