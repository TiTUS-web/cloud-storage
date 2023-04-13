import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import styled from 'styled-components';

import Files from '@/api/Files';
import { add, close } from '@/images';
import { FilesActionTypes, TCurrentPosition, TFile } from '@/types/files.types';
import { IState } from '@/types/store.types';
import { TUser } from '@/types/users.types';
import Storage from '@/utils/Storage';
const CreateFolderModal = () => {
  const oStorage: Storage = new Storage();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const oFiles: Files = new Files();

  const oUser: TUser = oStorage.getData('oUser');
  const oCurrentPosition: TCurrentPosition = useSelector(
    (state: IState) => state.files.oCurrentPosition,
  );

  const [sNameFolder, setNameFolder] = useState('');
  const [sAccessFolder, setAccessFolder] = useState('public');

  const handleSelectAccess = (sAccessFolder: string) => {
    setAccessFolder(sAccessFolder);
  };

  const handleCreateFolderModal = () => {
    dispatch({
      type: FilesActionTypes.SHOW_CREATE_FOLDER_MODAL,
      payload: false,
    });
  };

  const handleCreateFolder = () => {
    if (!sNameFolder) {
      // TODO make a notifyMessage component
      return;
    }

    const oFolder: TFile = {
      name: sNameFolder,
      type: 'dir',
      format: 'dir',
      userId: oUser.id,
      path: oCurrentPosition.path,
      parentId: oCurrentPosition.parentId,
      access: sAccessFolder,
    };

    oFiles
      .createFolder(oFolder)
      .then((sFileName) => {
        // sFileName must be passed to notifyMessage
        // TODO make a notifyMessage component
      })
      .catch((oErr) => {
        // TODO make a notifyMessage component
        console.log(oErr);
      });

    handleCreateFolderModal();
  };

  return (
    <Background>
      <Modal>
        <Title>Create folder</Title>
        <Close onClick={handleCreateFolderModal} src={close} />

        <Block>
          <Label>Name</Label>
          <Input
            onChange={(event: Event | any) => setNameFolder(event.target.value)}
          />
        </Block>
        <Block>
          <Label>New Access</Label>
          <Select
            value={sAccessFolder}
            onChange={(event: Event | any) =>
              handleSelectAccess(event.target.value)
            }
          >
            <option value='public'>public</option>
            <option value='private'>private</option>
          </Select>
        </Block>
        <Block>
          <Label>Path</Label>
          <Input
            value={oCurrentPosition.path + sNameFolder}
            type='text'
            readOnly
          />
        </Block>

        <CreateButton onClick={handleCreateFolder}>
          <IconButton src={add} alt='add'></IconButton>
          Create
        </CreateButton>
      </Modal>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const Modal = styled.div`
  background: #f4f7fc;
  padding: 20px 40px;
  margin: 10% auto;
  width: 30%;
  position: relative;
  border-radius: 5%;
  z-index: 10;
`;

const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 60px;
  text-transform: uppercase;
  color: #3b668d;
  margin-bottom: 30px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #606f89;
`;

const Input = styled.input`
  background: #dae1ec;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #606f89;
`;

const Select = styled.select`
  background: #dae1ec;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #606f89;
`;

const IconButton = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: 0.2s;
  margin-right: 15px;

  :hover {
    opacity: 0.8;
  }
`;

const CreateButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin: 0 auto;
  color: #ffffff;
  padding: 11px 26px 12px;
  background: #913e98;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
export default CreateFolderModal;
