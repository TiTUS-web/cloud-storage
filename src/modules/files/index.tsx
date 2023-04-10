import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Table from './components/Table';
import Tile from './components/Tile';

import Files from '@/api/Files';

import { add, upload, tile, table } from '@/images';
import { FilesActionTypes } from '@/types/files.types';
import { IState } from '@/types/store.types';
import { StyledProps } from '@/types/styled';

function Pagination() {
  return null;
}

const MyFiles = () => {
  const dispatch = useDispatch();
  const oFiles = new Files();

  const [sSearchFileName, setSearchFilename] = useState('');

  const handleFilesDisplayMode = (sDisplayMode: string) => {
    dispatch({ type: FilesActionTypes.SET_FILES_MODE, payload: sDisplayMode });
  };

  const sFilesDisplayMode = useSelector(
    (state: IState) => state.files.sFilesDisplayMode,
  );
  const bFilesNotFound = useSelector(
    (state: IState) => state.files.bFilesNotFound,
  );

  const getFiles = () => {
    oFiles
      .getFiles()
      .then((arFiles) => {
        dispatch({
          type: FilesActionTypes.SET_FILES,
          payload: arFiles,
        });
      })
      .catch();
  };

  getFiles();

  return (
    <section className='files' style={{ padding: '189px 0px 150px' }}>
      <Title>My files</Title>
      <Container>
        <Header>
          <Block
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Block style={{ width: '530px' }}>
              <SearchInput
                onChange={(event: Event | any) =>
                  setSearchFilename(event.target.value)
                }
                type='text'
                placeholder='Enter a file name and press Enter'
              />
            </Block>

            {!bFilesNotFound && (
              <Block>
                <IconButton
                  disabled={bFilesNotFound}
                  src={tile}
                  onClick={() => handleFilesDisplayMode('tile')}
                  alt='tile'
                ></IconButton>
                <IconButton
                  src={table}
                  onClick={() => handleFilesDisplayMode('table')}
                  alt='table'
                ></IconButton>
              </Block>
            )}

            <Block>
              <AddButton>
                <IconButton src={add} alt='add'></IconButton>
                Add Folder
              </AddButton>
              <UploadButton>
                <IconButton
                  disabled={bFilesNotFound}
                  src={upload}
                  alt='upload'
                ></IconButton>
                Upload File
              </UploadButton>
            </Block>
          </Block>
        </Header>

        {sFilesDisplayMode === 'table' ? (
          <Table searchFileName={sSearchFileName} />
        ) : (
          <Tile searchFileName={sSearchFileName} />
        )}

        <Footer>{sFilesDisplayMode && <Pagination />}</Footer>
      </Container>
    </section>
  );
};

const Title = styled.h2`
  font-weight: 900;
  font-size: 72px;
  line-height: 70px;
  letter-spacing: 0.405em;
  text-transform: uppercase;
  color: #3b668d;
  text-align: center;
  margin-bottom: 80px;
`;

const Header = styled.header`
  background: #f4f7fc;
  padding: 10px;
`;

const Footer = styled.footer`
  padding: 10px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #ddd;
`;

const Block = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(46, 59, 82, 0.33);
  padding: 11px 0 12px 40px;
  width: 100%;
  background: #dae1ec;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-right: 10px;
`;

const AddButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 11px 26px 12px;
  background: #913e98;
  border-radius: 4px;
  margin-right: 19px;
  display: flex;
  align-items: center;
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const UploadButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 11px 26px 12px;
  background: #f04438;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconButton = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: ${(props: StyledProps) =>
    props.left || props.right ? '40px' : '10px'};
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export default MyFiles;
