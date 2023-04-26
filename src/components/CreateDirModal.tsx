import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import styled from 'styled-components';

import Files from '@/api/Files';
import { add, close } from '@/images';
import {
  setDisplayCreateDirModal,
  setFiles,
} from '@/store/reducers/fileReducer';
import { TCurrentDir, TFileCreation } from '@/types/files.types';
import { IState } from '@/types/store.types';
import { TUser } from '@/types/users.types';
import Storage from '@/utils/Storage';
import {
  emitErrorMessages,
  emitSuccessMessages,
} from '@/utils/toastifyActions';
const CreateDirModal = () => {
  const oStorage: Storage = new Storage();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const oFiles: Files = new Files();

  const oUser: TUser = oStorage.getData('oUser');
  const oCurrentDir: TCurrentDir = useSelector(
    (state: IState) => state.files.oCurrentDir,
  );

  const [sNameDir, setNameDir] = useState('');
  const [sAccessDir, setAccessDir] = useState('public');

  const handleSelectAccess = (sAccessDir: string) => {
    setAccessDir(sAccessDir);
  };

  const handleDisplayCreateDirModal = (sDisplayModal: boolean) => {
    dispatch(setDisplayCreateDirModal(sDisplayModal));
  };

  const handleCreateDir = () => {
    if (!sNameDir) {
      emitErrorMessages('Specify directory name');
      return;
    }

    const oDir: TFileCreation = {
      name: sNameDir,
      type: 'dir',
      format: 'dir',
      userId: oUser.id,
      path: `${oCurrentDir.currentPath}${sNameDir}`,
      parentId: oCurrentDir.parentId,
      access: sAccessDir,
    };

    oFiles
      .createDir(oDir)
      .then(async (sFileName) => {
        emitSuccessMessages(
          `Directory "${sFileName}" was successfully created`,
        );
        handleDisplayCreateDirModal(false);
        dispatch(await setFiles());
      })
      .catch((err) => {
        emitErrorMessages(err);
      });
  };

  return (
    <Background>
      <Modal>
        <Title>Create directory</Title>
        <Close onClick={() => handleDisplayCreateDirModal(false)} src={close} />

        <Block>
          <Label>Name</Label>
          <Input
            onChange={(event: Event | any) => setNameDir(event.target.value)}
          />
        </Block>
        <Block>
          <Label>New Access</Label>
          <Select
            value={sAccessDir}
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
            value={oCurrentDir.currentPath + sNameDir}
            type='text'
            readOnly
          />
        </Block>

        <CreateButton onClick={handleCreateDir}>
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
export default CreateDirModal;
