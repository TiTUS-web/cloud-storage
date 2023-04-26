import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { tableActions, typeImg, view, deleteIcon, edit } from '@/images';

import { useFilterFiles } from '@/modules/files/hooks/useFilterFiles';
import { TFile, TDisplayProps } from '@/types/files.types';
import { IState } from '@/types/store.types';
import { StyledProps } from '@/types/styled';

const Table: React.FC<TDisplayProps> = ({
  searchFileName,
  handleDeleteFile,
  handleOpenDir,
}: TDisplayProps) => {
  const bFilesNotFound: boolean = useSelector(
    (state: IState) => state.files.bFilesNotFound,
  );
  const arFiles: TFile[] = useFilterFiles(searchFileName);

  if (bFilesNotFound) {
    return (
      <FilesNotFound>
        No files were found. You can create a dir by clicking "Add Directory"
      </FilesNotFound>
    );
  }

  return (
    <table
      className='table'
      style={{
        width: '100%',
        border: 'none',
        borderBottom: '1px solid #ddd',
        borderRadius: '6px',
      }}
    >
      <Head>
        <Tr>
          <Th center>
            <CheckBox type='checkbox' />
          </Th>
          <Th>Type</Th>
          <Th>Name</Th>
          <Th center>Date created</Th>
          <Th center>Size</Th>
          <Th center>Access</Th>
          <Th center>
            <Action src={tableActions} alt='actions' />
          </Th>
        </Tr>
      </Head>
      <Body>
        {arFiles.map((oFile: TFile) => (
          <Tr key={oFile.id}>
            <Td center>
              <CheckBox type='checkbox' />
            </Td>
            <Td>
              <Type src={typeImg} alt='img' />
            </Td>
            <Td>{oFile.name}</Td>
            <Td center>{oFile.createdAt}</Td>
            <Td center>{oFile.size}</Td>
            <Td center>
              {/* Access controls also help to prevent accidental deletion or modification of files, which could lead to data loss or damage. */}
              <Access>{oFile.access}</Access>
            </Td>
            <Td center>
              <Action
                onClick={() => handleOpenDir(oFile.type, oFile.path, oFile.id)}
                src={view}
                alt='view'
              />
              <Action
                onClick={() => handleDeleteFile(oFile.id)}
                src={deleteIcon}
                alt='delete'
              />
              <Action src={edit} alt='edit' />
            </Td>
          </Tr>
        ))}
      </Body>
    </table>
  );
};

const Type = styled.img``;

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

const Action = styled.img`
  cursor: pointer;
  transition: 0.2s;

  :not(:last-child) {
    margin-right: 13px;
  }

  :hover {
    opacity: 0.8;
  }
`;

const CheckBox = styled.input`
  cursor: pointer;
  background: #0a65ff;
  border-radius: 3px;
  accent-color: #0a65ff;
  height: 20px;
  width: 20px;
`;

const Access = styled.span`
  background: #0a65ff;
  border-radius: 11px;
  padding: 4px 5px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
`;

const Head = styled.thead``;

const Body = styled.tbody``;

const Th = styled.th`
  text-align: ${(props: StyledProps) => (props.center ? 'center' : 'left')};
  border: none;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #606f89;
  background: #f4f7fc;
  vertical-align: middle;
`;

const Td = styled.td`
  text-align: ${(props: StyledProps) => (props.center ? 'center' : 'left')};
  border: none;
  padding: 10px 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2e3b52;
  vertical-align: middle;

  :first-child {
    border-left: 1px solid #ddd;
  }

  :last-child {
    border-right: 1px solid #ddd;
  }
`;

const Tr = styled.tr`
  transition: 0.1s;

  :hover {
    background: #f4f7fc;
  }
`;

export default React.memo(Table);
