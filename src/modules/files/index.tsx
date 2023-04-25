import React, { useState, useCallback, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import styled from 'styled-components';

import DragAndDrop from './components/DragAndDrop';
import Table from './components/Table';
import Tile from './components/Tile';

import Files from '@/api/Files';

import Breadcrumbs from '@/components/Breadcrumbs';
import { add, upload, tile, table } from '@/images';
import { search } from '@/images';
import {
  setFiles,
  setDisplayCreateDirModal,
  setFilesMode,
} from '@/store/reducers/fileReducer';
import { IState } from '@/types/store.types';

import {
  emitErrorMessages,
  emitSuccessMessages,
} from '@/utils/toastifyActions';

const MyFiles = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const oFiles: Files = new Files();

  const [sSearchFileName, setSearchFilename] = useState('');

  const sFilesDisplayMode: string = useSelector(
    (state: IState) => state.files.sFilesDisplayMode,
  );
  const bFilesNotFound: boolean = useSelector(
    (state: IState) => state.files.bFilesNotFound,
  );

  const handleFilesMode = (sFilesMode: string) => {
    dispatch(setFilesMode(sFilesMode));
  };

  const handleDisplayCreateDirModal = (sDisplayModal: boolean) => {
    dispatch(setDisplayCreateDirModal(sDisplayModal));
  };

  const getFiles = useCallback(async () => {
    dispatch(await setFiles());
  }, []);

  const handleDeleteFile = (iFileId: number): void => {
    oFiles
      .deleteFile(iFileId)
      .then((sFileName) => {
        emitSuccessMessages(`"${sFileName}" was successfully deleted`);
        getFiles();
      })
      .catch((err) => {
        emitErrorMessages(err);
      });
  };

  getFiles();

  return (
    <section className='files' style={{ padding: '189px 0px 150px' }}>
      <Container>
        <Title>My files</Title>

        <Header>
          <Block>
            <Buttons>
              <CreateButton
                onClick={() => handleDisplayCreateDirModal(true)}
                title='Create Directory'
                type='button'
              >
                <IconButton src={add} alt='add'></IconButton>
              </CreateButton>

              <UploadButton title='Upload File' type='button'>
                <IconButton
                  disabled={bFilesNotFound}
                  src={upload}
                  alt='upload'
                ></IconButton>
              </UploadButton>
            </Buttons>
          </Block>

          <Block>
            <Utils>
              <IconButton
                style={{ marginRight: '10px' }}
                disabled={bFilesNotFound}
                src={tile}
                onClick={() => handleFilesMode('tile')}
                alt='tile'
              ></IconButton>
              <IconButton
                src={table}
                onClick={() => handleFilesMode('table')}
                alt='table'
              ></IconButton>
            </Utils>

            <SearchInputWrapper>
              <SearchInput
                onChange={(event: Event | any) =>
                  setSearchFilename(event.target.value)
                }
                type='text'
                placeholder='Сloud search'
              />
              <img src={search} alt='search' />
            </SearchInputWrapper>
          </Block>
        </Header>
        {sFilesDisplayMode && <Breadcrumbs />}

        {sFilesDisplayMode === 'table' ? (
          <Table
            handleDeleteFile={handleDeleteFile}
            searchFileName={sSearchFileName}
          />
        ) : (
          <Tile
            handleDeleteFile={handleDeleteFile}
            searchFileName={sSearchFileName}
          />
        )}
        <DragAndDrop />
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
  display: flex;
  justify-content: space-between;
  background: #f4f7fc;
  padding: 10px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
`;

const Utils = styled.div`
  display: flex;
  margin-right: 15px;
`;

const SearchInputWrapper = styled.div`
  padding: 11px 8px 12px 8px;
  background: #dae1ec;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #dae1ec;
  color: rgba(46, 59, 82, 0.33);
  outline: none;
  border: none;
`;

const CreateButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 11px 15px 12px;
  background: #913e98;
  border-radius: 4px;
  margin-right: 10px;
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
  padding: 11px 15px 12px;
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

  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export default MyFiles;
