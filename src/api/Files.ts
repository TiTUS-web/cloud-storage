import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import { TFile, TFileCreation } from '@/types/files.types';
import Storage from '@/utils/Storage';

class Files {
  private oStorage = new Storage();
  private token: string = this.oStorage.getData('token');
  private oConfigAxios = {
    headers: {
      Autorization: `Bearer ${this.token}`,
    },
  };

  createDir(oDir: TFileCreation): Promise<string> {
    return new Promise((resolve, reject): void => {
      API.post('/files', oDir, this.oConfigAxios)
        .then((oResponse: AxiosResponse<any, TFileCreation>) => {
          resolve(oResponse.data.name);
        })
        .catch((oErr): void => {
          reject(oErr.response.data);
        });
    });
  }

  getFiles(): Promise<TFile[]> {
    return new Promise((resolve, reject) => {
      API.get('/files', this.oConfigAxios)
        .then((oResponse: AxiosResponse<any, TFile[]>) => {
          resolve(oResponse.data);
        })
        .catch((oErr) => {
          reject(oErr.response.data);
        });
    });
  }

  deleteFile(iFileId: number): Promise<string> {
    return new Promise((resolve, reject) => {
      API.delete(`/files/delete/${iFileId}`, this.oConfigAxios)
        .then((oResponse: AxiosResponse<any, string>) => {
          resolve(oResponse.data);
        })
        .catch((oErr): void => {
          reject(oErr.response.data);
        });
    });
  }
}

export default Files;
