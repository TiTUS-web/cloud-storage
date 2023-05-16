import React from 'react';
import styled from 'styled-components';

import { typeImg } from '@/images';
import { TDragAndDropProps } from '@/types/files.types';
import { StyledProps } from '@/types/styled';

const DragAndDrop: React.FC<TDragAndDropProps> = ({
  arFilesUpload,
}: TDragAndDropProps) => {
  if (!arFilesUpload.length) {
    return (
      <Wrapper>
        <Title>Click or transfer files to download</Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper left={arFilesUpload.length}>
      <FilesUploadWrapper>
        {arFilesUpload.map((oFile: File) => {
          return (
            <FileUpload key={oFile.name}>
              <Block>
                <Type src={typeImg} alt='img' />
                <Name>{oFile.name}</Name>
              </Block>
            </FileUpload>
          );
        })}
      </FilesUploadWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 95, 249, 0.04);
  border: 2px dashed rgba(0, 95, 249, 0.6);
  border-radius: 0 0 5px 5px;
  justify-content: ${(props: StyledProps) =>
    props.left ? 'flex-start' : 'center'};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 14px;
  line-height: 18px;
  margin: 90px 0;
`;

const FilesUploadWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

const FileUpload = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2e3b52;
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const Block = styled.div`
  display: flex;
`;

const Name = styled.div``;

const Type = styled.img`
  margin-right: 20px;
`;

export default DragAndDrop;
