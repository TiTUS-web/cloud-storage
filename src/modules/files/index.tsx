import styled from 'styled-components';

import Table from './components/Table';
import Tile from './components/Tile';

import { search, add, upload, left, right, tile, table } from '@/images';
import { StyledProps } from '@/types/styled';

const Files = () => {
  return (
    <section className='files' style={{ padding: '189px 0px 150px' }}>
      <Title>My files</Title>
      <Container>
        <Header>
          <Block
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Block style={{ width: '530px' }}>
              <SearchInput placeholder='Enter a file name and press Enter' />
              <SearchButton>
                <IconButton src={search} alt='search'></IconButton>
                Search
              </SearchButton>
            </Block>
            <Block>
              <IconButton src={tile} alt='tile'></IconButton>
              <IconButton src={table} alt='table'></IconButton>
            </Block>
            <Block>
              <AddButton>
                <IconButton src={add} alt='add'></IconButton>
                Add Folder
              </AddButton>
              <UploadButton>
                <IconButton src={upload} alt='upload'></IconButton>
                Upload File
              </UploadButton>
            </Block>
          </Block>
        </Header>
        {/* <Tile /> */}
        {/* <Table /> */}
        <Footer>
          <RowsPerPage>1-10 of 706</RowsPerPage>
          <IconButton src={left} left alt='leftArrow'></IconButton>
          <IconButton src={right} right alt='rightArrow'></IconButton>
        </Footer>
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

const RowsPerPage = styled.span`
  margin-right: 95px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #606f89;
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
`;

const SearchButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 11px 26px 12px;
  background: #455b66;
  border-radius: 4px;
  margin-right: 19px;
  display: flex;
  align-items: center;
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
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

export default Files;
