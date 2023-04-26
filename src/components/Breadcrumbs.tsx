import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { back } from '@/images';
import { IState } from '@/types/store.types';

const Breadcrumbs = () => {
  const sBreadcrumbs: string = useSelector(
    (state: IState) => state.files.oCurrentDir.currentPath,
  );

  return (
    <Wrapper>
      <IconButton src={back} alt='back' />
      {'Все файлы ' + sBreadcrumbs}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  -webkit-letter-spacing: 0.05em;
  -moz-letter-spacing: 0.05em;
  -ms-letter-spacing: 0.05em;
  letter-spacing: 0.05em;
  color: #606f89;
  padding: 10px;
`;

const IconButton = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;

  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export default Breadcrumbs;
