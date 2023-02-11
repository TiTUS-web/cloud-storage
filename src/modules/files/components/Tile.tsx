import styled from 'styled-components';

import { document, folder } from '../../../images';

const Tile = () => {
  return (
    <div className='tile' style={{ margin: '50px' }}>
      <Container>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={folder}></FileIcon>
          <FileName>Folder</FileName>
        </Block>
        <Block>
          <FileIcon src={document}></FileIcon>
          <FileName>Document.docx</FileName>
        </Block>
        <Block>
          <FileIcon src={document}></FileIcon>
          <FileName>Document.docx</FileName>
        </Block>
        <Block>
          <FileIcon src={document}></FileIcon>
          <FileName>Document.docx</FileName>
        </Block>
        <Block>
          <FileIcon src={document}></FileIcon>
          <FileName>Document.docx</FileName>
        </Block>
        <Block>
          <FileIcon src={document}></FileIcon>
          <FileName>Document.docx</FileName>
        </Block>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  jusitify-content: space-between;
  flex-wrap: wrap;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 92px;

  :not(:last-child) {
    margin-right: 29.8px;
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

export default Tile;
