import { TSort } from '@/types/files.types';

export const getSort = (arSort: TSort[] | object[]) => {
  const arNewSort = [];
  for (let i: number = 0; i < arSort.length; i++) {
    if (Object.keys(arSort[i]).length) {
      const oSort: TSort | object = arSort[i];
      arNewSort.push(oSort);
    }
  }

  return arNewSort;
};
