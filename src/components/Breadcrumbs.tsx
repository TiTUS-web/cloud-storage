import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { back } from '@/images';

import { backCurrentOpenFile } from '@/store/reducers/fileReducer';
import { IState } from '@/types/store.types';

const Breadcrumbs = () => {
  const dispatch = useDispatch();

  const arCurrentOpenDirs: number[] = useSelector(
    (state: IState) => state.files.arCurrentOpenDirs,
  );

  const arBreadCrumbs: string[] = useSelector(
    (state: IState) => state.files.arBreadCrumbs,
  );

  const handleBackDir = (
    arCurrentOpenDirs: number[],
    arBreadCrumbs: string[],
  ) => {
    arCurrentOpenDirs.pop();
    arBreadCrumbs.pop();
    const iLastCurrentOpenDir: number =
      arCurrentOpenDirs[arCurrentOpenDirs.length - 1];

    dispatch(
      backCurrentOpenFile(
        arCurrentOpenDirs,
        arBreadCrumbs,
        iLastCurrentOpenDir,
      ),
    );
  };

  return (
    <Wrapper>
      {arBreadCrumbs.length ? (
        <IconButton
          onClick={() => handleBackDir(arCurrentOpenDirs, arBreadCrumbs)}
          src={back}
          alt='back'
        />
      ) : (
        ''
      )}
      <Breadcrumb>All files</Breadcrumb>
      {arBreadCrumbs.length ? <Separator>{'>'}</Separator> : ''}

      {arBreadCrumbs.map((sFileName: string) => {
        return (
          <Block key={sFileName}>
            <Breadcrumb>{sFileName}</Breadcrumb>
            <Separator>{'>'}</Separator>
          </Block>
        );
      })}
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

const Block = styled.div`
  display: flex;

  &:last-child span {
    display: none;
  }
`;

const Breadcrumb = styled.div`
  transition: 0.2s;
  cursor: pointer;
  border-bottom: 2px;
  margin-left: 5px;

  :hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 10px;
`;

export default Breadcrumbs;
