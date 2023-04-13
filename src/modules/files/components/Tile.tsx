import React, { useDeferredValue, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { folder } from '@/images';
import { TDisplayProps, TFile } from '@/types/files.types';
import { IState } from '@/types/store.types';

const Tile: React.FC<TDisplayProps> = ({ searchFileName }: TDisplayProps) => {
  const arFiles: [] = useSelector((state: IState) => state.files.arFiles);
  const bFilesNotFound: boolean = useSelector(
    (state: IState) => state.files.bFilesNotFound,
  );

  const sDeferredSearchFileName: string = useDeferredValue(searchFileName);
  const getSearchedFiles: JSX.Element | JSX.Element[] = useMemo(():
    | JSX.Element
    | JSX.Element[] => {
    const arFilteredFiles: never[] = arFiles.filter((oFile: TFile): boolean => {
      if (sDeferredSearchFileName === '') {
        return true;
      } else if (
        oFile.name.toLowerCase().includes(sDeferredSearchFileName.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (arFilteredFiles.length === 0) {
      return <SearchNotFound>No files were found</SearchNotFound>;
    }

    return arFilteredFiles.map((oFile: TFile) => (
      <Block key={oFile.id}>
        <FileIcon src={folder}></FileIcon>
        <FileName>{oFile.name}</FileName>
      </Block>
    ));
  }, [sDeferredSearchFileName, arFiles]);

  if (bFilesNotFound) {
    return (
      <FilesNotFound>
        No files were found. You can create a folder by clicking "Add Folder"
      </FilesNotFound>
    );
  }

  return (
    <div className='tile' style={{ margin: '50px' }}>
      <Container>{getSearchedFiles}</Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilesNotFound = styled.div`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: rgba(46, 59, 82, 0.33);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  text-align: center;
  margin: 50px 0;
`;

const SearchNotFound = styled.div`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: rgba(46, 59, 82, 0.33);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  text-align: center;
  margin: 0 auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 92px;

  :not(:last-child) {
    margin-right: 28.8px;
  }
`;

const FileIcon = styled.img`
  width: 92px;
  height: 90px;
`;

const FileName = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  color: #566885;
  text-align: center;
`;

export default React.memo(Tile);
