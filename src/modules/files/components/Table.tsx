import styled from 'styled-components';

import {
  tableActions,
  typeImg,
  accessView,
  accessEdit,
  accessDelete,
} from '@/images';

import { StyledProps } from '@/types/styled';

const Table = () => {
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
    </table>
  );
};

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

export default Table;
