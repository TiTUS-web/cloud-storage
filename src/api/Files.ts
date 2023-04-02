import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import { TFile } from '@/types/files.types';
import Storage from '@/utils/Storage';

class Files {
  private oStorage = new Storage();
  private token: string = this.oStorage.getData('token');
  private oConfigAxios = {
    headers: {
      Autorization: `Bearer ${this.token}`,
    },
  };

  getFiles() {
    return new Promise((resolve, reject) => {
      API.get('/files', this.oConfigAxios)
        .then((oResponse: AxiosResponse<any, TFile[]>) => {
          resolve(oResponse.data);
        })
        .catch((oErr) => {
          reject(oErr);
        });
    });
  }
}

export default Files;
