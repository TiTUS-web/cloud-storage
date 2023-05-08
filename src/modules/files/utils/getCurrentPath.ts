import { TBreadCrumb } from '@/types/files.types';

export const getCurrentPath = (
  arBreadCrumbs: TBreadCrumb[],
  sFileName?: string,
) => {
  const arName: string[] = arBreadCrumbs.map(
    (oBreadCrumb: TBreadCrumb) => oBreadCrumb.name,
  );

  if (arName.length) {
    return '/' + arName.join('/') + (sFileName ? '/' + sFileName : '/');
  }

  return sFileName ? '/' + sFileName : '/';
};
