import styled from 'styled-components';

import {
  tableActions,
  typeImg,
  accessView,
  accessEdit,
  accessDelete,
  search,
  add,
  upload,
  left,
  right,
} from '../../images';

import { StyledProps } from '../../types/styled';

const Files = () => {
  return (
    <div className='files' style={{ padding: '189px 0px 150px' }}>
      <Title>My files</Title>
      <Container>
        <TableHeader>
          <Block style={{ justifyContent: 'space-between' }}>
            <Block style={{ width: '530px' }}>
              <SearchInput placeholder='Enter a file name and press Enter' />
              <SearchButton>
                <IconButton src={search} alt='search'></IconButton>
                Search
              </SearchButton>
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
        </TableHeader>
        <Table>
          <Head>
            <Tr>
              <Th center>
                <CheckBox type='checkbox' />
              </Th>
              <Th>Type</Th>
              <Th>Name</Th>
              <Th center>File count</Th>
              <Th center>Date created</Th>
              <Th>Size</Th>
              <Th center>Access</Th>
              <Th center>
                <Action src={tableActions} alt='actions' />
              </Th>
            </Tr>
          </Head>
          <Body>
            <Tr>
              <Td center>
                <CheckBox type='checkbox' />
              </Td>
              <Td>
                <Type src={typeImg} alt='img' />
              </Td>
              <Td>Lorem-ipsum_sitamet.jpg</Td>
              <Td center>1</Td>
              <Td center>2021.09.30</Td>
              <Td>12.44 Mb</Td>
              <Td center>
                <Access>public</Access>
              </Td>
              <Td center>
                <Action src={accessView} alt='view' />
                <Action src={accessDelete} alt='delete' />
                <Action src={accessEdit} alt='edit' />
              </Td>
            </Tr>
            <Tr>
              <Td center>
                <CheckBox type='checkbox' />
              </Td>
              <Td>
                <Type src={typeImg} alt='img' />
              </Td>
              <Td>Lorem-ipsum_sitamet.jpg</Td>
              <Td center>1</Td>
              <Td center>2021.09.30</Td>
              <Td>12.44 Mb</Td>
              <Td center>
                <Access>public</Access>
              </Td>
              <Td center>
                <Action src={accessView} alt='view' />
                <Action src={accessDelete} alt='delete' />
                <Action src={accessEdit} alt='edit' />
              </Td>
            </Tr>
            <Tr>
              <Td center>
                <CheckBox type='checkbox' />
              </Td>
              <Td>
                <Type src={typeImg} alt='img' />
              </Td>
              <Td>Lorem-ipsum_sitamet.jpg</Td>
              <Td center>1</Td>
              <Td center>2021.09.30</Td>
              <Td>12.44 Mb</Td>
              <Td center>
                <Access>public</Access>
              </Td>
              <Td center>
                <Action src={accessView} alt='view' />
                <Action src={accessDelete} alt='delete' />
                <Action src={accessEdit} alt='edit' />
              </Td>
            </Tr>
            <Tr>
              <Td center>
                <CheckBox type='checkbox' />
              </Td>
              <Td>
                <Type src={typeImg} alt='img' />
              </Td>
              <Td>Lorem-ipsum_sitamet.jpg</Td>
              <Td center>1</Td>
              <Td center>2021.09.30</Td>
              <Td>12.44 Mb</Td>
              <Td center>
                <Access>public</Access>
              </Td>
              <Td center>
                <Action src={accessView} alt='view' />
                <Action src={accessDelete} alt='delete' />
                <Action src={accessEdit} alt='edit' />
              </Td>
            </Tr>
            <Tr>
              <Td center>
                <CheckBox type='checkbox' />
              </Td>
              <Td>
                <Type src={typeImg} alt='img' />
              </Td>
              <Td>Lorem-ipsum_sitamet.jpg</Td>
              <Td center>1</Td>
              <Td center>2021.09.30</Td>
              <Td>12.44 Mb</Td>
              <Td center>
                <Access>public</Access>
              </Td>
              <Td center>
                <Action src={accessView} alt='view' />
                <Action src={accessDelete} alt='delete' />
                <Action src={accessEdit} alt='edit' />
              </Td>
            </Tr>
          </Body>
        </Table>
        <TableFooter>
          <RowsPerPage style={{ marginRight: '95px' }}>1-10 of 706</RowsPerPage>
          <IconButton src={left} left alt='leftArrow'></IconButton>
          <IconButton src={right} right alt='rightArrow'></IconButton>
        </TableFooter>
      </Container>
    </div>
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

const TableHeader = styled.header`
  background: #f4f7fc;
  padding: 10px;
`;

const TableFooter = styled.footer`
  padding: 10px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  border: 1px solid #ddd;
  border-top: none;
`;

const RowsPerPage = styled.span`
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

const Table = styled.table`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  width: 100%;
  border-radius: 6px;
`;

const IconButton = styled.img`
  cursor: pointer;
  margin-right: ${(props: StyledProps) =>
    props.left || props.right ? '50px' : '10px'};
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const Type = styled.img``;

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
  font-weight: bold;
  text-align: ${(props: StyledProps) => (props.center ? 'center' : 'left')};
  border: none;
  padding: 10px 15px;
  background: #ededed;
  font-size: 14px;
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

export default Files;
