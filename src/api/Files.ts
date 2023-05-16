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
      Authorization: `Bearer ${this.token}`,
    },
  };
  private oConfigUpload = {
    headers: {
      Authorization: `Bearer ${this.token}`,
      'content-type': 'multipart/form-data',
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

  uploadFile(arFiles: File[], parentId: number | null): Promise<string> {
    return new Promise((resolve, reject) => {
      const sPostUrl: string = parentId
        ? `/files/upload/${this.oUser.id}?parent=${parentId}`
        : `/files/upload/${this.oUser.id}`;

      const oFormData: FormData = new FormData();

      for (let i = 0; i < arFiles.length; i++) {
        oFormData.append('files[]', arFiles[i]);
      }

      API.post(sPostUrl, oFormData, this.oConfigUpload)
        .then((oResponse: AxiosResponse<any, string>) => {
          resolve(oResponse.data);
        })
        .catch((oErr): void => {
          reject(oErr.response);
        });
    });
  }
}

export default Files;
