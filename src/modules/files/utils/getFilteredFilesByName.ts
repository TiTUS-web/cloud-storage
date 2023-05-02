import { TFile } from '@/types/files.types';
export const getFilteredFilesByName = (
  arFiles: TFile[],
  sSearchFileName: string,
): TFile[] => {
  return arFiles.filter((oFile: TFile): boolean =>
    oFile.name.toLowerCase().includes(sSearchFileName.toLowerCase()),
  );
};
