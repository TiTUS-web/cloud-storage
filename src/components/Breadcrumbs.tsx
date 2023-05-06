import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { back } from '@/images';

import {
  backCurrentOpenFile,
  setFiles,
  setSearchFileName,
} from '@/store/reducers/fileReducer';
import { TBreadCrumb, TSort } from '@/types/files.types';
import { IState } from '@/types/store.types';

const Breadcrumbs = () => {
  const dispatch = useDispatch();

  const arCurrentOpenDirs: number[] | [] = useSelector(
    (state: IState) => state.files.arCurrentOpenDirs,
  );
  const arBreadCrumbs: TBreadCrumb[] | [] = useSelector(
    (state: IState) => state.files.arBreadCrumbs,
  );
  const arSort: TSort[] | [] = useSelector(
    (state: IState) => state.files.arSort,
  );
  const sSearchFileName: string = useSelector(
    (state: IState) => state.files.sSearchFileName,
  );

  const getFilesByBreadCrumb = async (oDir: TBreadCrumb) => {
    handleBackDirByBreadCrumb(arCurrentOpenDirs, arBreadCrumbs, oDir.id);
    dispatch(await setFiles(oDir.id, arSort, sSearchFileName));
  };

  const handleBackDirByBreadCrumb = (
    arCurrentOpenDirs: number[],
    arBreadCrumbs: TBreadCrumb[],
    iDirId: number,
  ) => {
    const iCurrentOpenDir: number =
      arCurrentOpenDirs[arCurrentOpenDirs.length - 1];

    if (iCurrentOpenDir === iDirId) return;

    const index: number = arBreadCrumbs.findIndex(
      (oBreadCrumb: TBreadCrumb): boolean => oBreadCrumb.id === iDirId,
    );

    const arNewCurrentOpenDirs: number[] = arCurrentOpenDirs.slice(
      0,
      index + 1,
    );
    const arNewBreadCrumbs: TBreadCrumb[] = arBreadCrumbs.slice(0, index + 1);
    const iNewCurrentOpenDir: number =
      arNewCurrentOpenDirs[arNewCurrentOpenDirs.length - 1];

    dispatch(setSearchFileName(''));
    dispatch(
      backCurrentOpenFile(
        arNewCurrentOpenDirs,
        arNewBreadCrumbs,
        iNewCurrentOpenDir,
      ),
    );
  };

  const handleBackDir = (
    arCurrentOpenDirs: number[],
    arBreadCrumbs: TBreadCrumb[],
  ) => {
    arCurrentOpenDirs.pop();
    arBreadCrumbs.pop();
    const iCurrentOpenDir: number =
      arCurrentOpenDirs[arCurrentOpenDirs.length - 1];

    dispatch(setSearchFileName(''));
    dispatch(
      backCurrentOpenFile(arCurrentOpenDirs, arBreadCrumbs, iCurrentOpenDir),
    );
  };

  return (
    <Wrapper>
      {arBreadCrumbs.length ? (
        <IconButton
          onClick={() => handleBackDir(arCurrentOpenDirs, arBreadCrumbs)}
          src={back}
          alt='back'
        />
      ) : (
        ''
      )}
      <Breadcrumb onClick={() => handleBackDir([], [])}>All files</Breadcrumb>
      {arBreadCrumbs.length ? <Separator>{'>'}</Separator> : ''}

      {arBreadCrumbs.map((oDir: { id: number; name: string }) => {
        return (
          <Block key={oDir.id}>
            <Breadcrumb onClick={() => getFilesByBreadCrumb(oDir)}>
              {oDir.name}
            </Breadcrumb>
            <Separator>{'>'}</Separator>
          </Block>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  -webkit-letter-spacing: 0.05em;
  -moz-letter-spacing: 0.05em;
  -ms-letter-spacing: 0.05em;
  letter-spacing: 0.05em;
  color: #606f89;
  padding: 10px;
`;

const IconButton = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const Block = styled.div`
  display: flex;

  &:last-child span {
    display: none;
  }
`;

const Breadcrumb = styled.div`
  transition: 0.2s;
  cursor: pointer;
  border-bottom: 2px;
  margin-left: 5px;

  :hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 10px;
`;

export default Breadcrumbs;
