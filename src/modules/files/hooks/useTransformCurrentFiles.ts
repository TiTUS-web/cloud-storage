import { TFile } from '@/types/files.types';

export const useTransformCurrentFiles = (): {
  getPath: (arFiles: TFile[], arCurrentOpenDirs: number[]) => string;
  getBreadcrumbs: (arFiles: TFile[], arCurrentOpenDirs: number[]) => string[];
} => {
  const getPath = (arFiles: TFile[], arCurrentOpenDirs: number[]): string => {
    const arNameFiles: string[] = arFiles
      .filter((oFile: TFile) => arCurrentOpenDirs.includes(oFile.id))
      .map((oFile: TFile) => oFile.name);

    const path: string = arNameFiles.join('/');

    return '/' + path;
  };

  const getBreadcrumbs = (
    arFiles: TFile[],
    arCurrentOpenDirs: number[],
  ): string[] => {
    const arBreadCrumbs: string[] = arFiles
      .filter((oFile: TFile) => arCurrentOpenDirs.includes(oFile.id))
      .sort(
        (a: TFile, b: TFile) =>
          arCurrentOpenDirs.indexOf(a.id) - arCurrentOpenDirs.indexOf(b.id),
      )
      .map((oFile: TFile) => oFile.name);

    return arBreadCrumbs;
  };

  return {
    getPath,
    getBreadcrumbs,
  };
};
