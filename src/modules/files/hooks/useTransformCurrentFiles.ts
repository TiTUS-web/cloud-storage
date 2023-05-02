import { TFile } from '@/types/files.types';

export const useTransformCurrentFiles = (): {
  getLastId: (arCurrentFiles: number[]) => number | null;
  getPath: (arFiles: TFile[], arCurrentFiles: number[]) => string;
  getBreadcrumbs: (arFiles: TFile[], arCurrentFiles: number[]) => string[];
} => {
  const getLastId = (arCurrentFiles: number[]): number | null => {
    if (arCurrentFiles.length) {
      return arCurrentFiles.pop()!;
    }

    return null;
  };

  const getPath = (arFiles: TFile[], arCurrentFiles: number[]): string => {
    const arNameFiles: string[] = arFiles
      .filter((oFile: TFile) => arCurrentFiles.includes(oFile.id))
      .map((oFile: TFile) => oFile.name);

    const path: string = arNameFiles.join('/');

    return '/' + path;
  };

  const getBreadcrumbs = (
    arFiles: TFile[],
    arCurrentFiles: number[],
  ): string[] => {
    const arBreadCrumbs: string[] = arFiles
      .filter((oFile: TFile) => arCurrentFiles.includes(oFile.id))
      .map((oFile: TFile) => oFile.name);

    return arBreadCrumbs;
  };

  return {
    getLastId,
    getPath,
    getBreadcrumbs,
  };
};
