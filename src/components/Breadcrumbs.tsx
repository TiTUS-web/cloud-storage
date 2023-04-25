import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { IState } from '@/types/store.types';

const Breadcrumbs = () => {
  const sBreadcrumbs: string = useSelector(
    (state: IState) => state.files.oCurrentDir.path,
  );

  return <Wrapper>{'Все файлы ' + sBreadcrumbs}</Wrapper>;
};

const Wrapper = styled.section`
  margin-right: 95px;
  font-weight: 600;
  font-size: 18px;
  -webkit-letter-spacing: 0.05em;
  -moz-letter-spacing: 0.05em;
  -ms-letter-spacing: 0.05em;
  letter-spacing: 0.05em;
  color: #606f89;
  padding: 10px;
`;

export default Breadcrumbs;
