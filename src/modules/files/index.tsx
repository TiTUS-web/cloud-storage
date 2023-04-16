import React, { useState, useCallback, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import styled from 'styled-components';

import Table from './components/Table';
import Tile from './components/Tile';

import Files from '@/api/Files';

import { add, upload, tile, table } from '@/images';
import { FilesActionTypes } from '@/types/files.types';
import { IState } from '@/types/store.types';
import { StyledProps } from '@/types/styled';
import {
  emitErrorMessages,
  emitSuccessMessages,
} from '@/utils/toastifyActions';

function Pagination() {
  return null;
}

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

  const getFiles = useCallback(() => {
    oFiles
      .getFiles()
      .then((arFiles) => {
        dispatch({
          type: FilesActionTypes.SET_FILES,
          payload: arFiles,
        });
      })
      .catch((err) => {
        emitErrorMessages(err);
      });
  }, []);

  const handleFilesDisplayMode = (sDisplayMode: string) => {
    dispatch({ type: FilesActionTypes.SET_FILES_MODE, payload: sDisplayMode });
  };

  const handleCreateDirModal = () => {
    dispatch({
      type: FilesActionTypes.SHOW_CREATE_DIR_MODAL,
      payload: true,
    });
  };

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
      <Title>My files</Title>
      <Container>
        <Header>
          <Block
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {!bFilesNotFound && (
              <Block
                style={{
                  marginLeft: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '60%',
                }}
              >
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

                <SearchInput
                  onChange={(event: Event | any) =>
                    setSearchFilename(event.target.value)
                  }
                  style={{ width: '100%' }}
                  type='text'
                  placeholder='Enter a file name and press Enter'
                />
              </Block>
            )}

            <Block>
              <CreateButton onClick={handleCreateDirModal}>
                <IconButton src={add} alt='add'></IconButton>
                Create Directory
              </CreateButton>
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

const CreateButton = styled.button`
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
