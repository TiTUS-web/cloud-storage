import { AxiosResponse } from 'axios';

import API from '@/api/axios';
import { TFile, TDirCreation, TSort } from '@/types/files.types';
import { TUser } from '@/types/users.types';
import Storage from '@/utils/Storage';

class Files {
  private oStorage = new Storage();
  private token: string = this.oStorage.getData('token');
  private oUser: TUser = this.oStorage.getData('oUser');
  private oConfigAxios = {
    headers: {
      Autorization: `Bearer ${this.token}`,
    },
  };

  createDir(oDir: TDirCreation): Promise<string> {
    return new Promise((resolve, reject): void => {
      API.post('/files', oDir, this.oConfigAxios)
        .then((oResponse: AxiosResponse<any, TDirCreation>) => {
          resolve(oResponse.data.name);
        })
        .catch((oErr): void => {
          reject(oErr.response.data);
        });
    });
  }

  getFiles(iDirId: number | null, arSort: TSort[]): Promise<TFile[]> {
    let sGetUrl: string;

    if (iDirId) {
      sGetUrl = `/files/${this.oUser.id}?parent=${iDirId}`;
    }

    if (arSort.length) {
      sGetUrl = `/files/${this.oUser.id}?sort=${arSort
        .map((oSort: TSort): string => `${oSort.field}:${oSort.order}`)
        .join(',')}`;
    }

    if (iDirId && arSort.length) {
      sGetUrl = `/files/${this.oUser.id}?parent=${iDirId}&sort=${arSort
        .map((oSort: TSort): string => `${oSort.field}:${oSort.order}`)
        .join(',')}`;
    }

    if (!iDirId && !arSort.length) {
      sGetUrl = `/files/${this.oUser.id}`;
    }

    return new Promise((resolve, reject) => {
      API.get(sGetUrl, this.oConfigAxios)
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
