import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { TCurrentDir, TFile } from '@/types/files.types';
import { IState } from '@/types/store.types';

export const useFilterFiles = (searchFileName: string): TFile[] => {
  const arFiles: [] = useSelector((state: IState) => state.files.arFiles);
  const oCurrentDir: TCurrentDir = useSelector(
    (state: IState) => state.files.oCurrentDir,
  );

  const arFilteredByName: TFile[] = useMemo(() => {
    if (searchFileName === '') {
      return arFiles;
    }

    return arFiles.filter((oFile: TFile): boolean =>
      oFile.name.toLowerCase().includes(searchFileName.toLowerCase()),
    );
  }, [arFiles, searchFileName]);

  // TODO is it necessary to check if there is a oCurrentDir.parentId here ?
  const arFilteredByParentId: TFile[] = useMemo(
    () =>
      arFilteredByName.filter(
        (oFile: TFile): boolean => oFile.parentId === oCurrentDir.parentId,
      ),
    [arFilteredByName, oCurrentDir],
  );

  return arFilteredByParentId;
};
