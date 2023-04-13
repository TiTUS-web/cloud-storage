import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import CreateFolderModal from '@/components/CreateFolderModal';
import Header from '@/components/Header';

import { background, backgroundFull } from '@/images';

import Login from '@/modules/auth/Login';
import Recover from '@/modules/auth/Recover';
import Registration from '@/modules/auth/Registration';
import Files from '@/modules/files/';
import Profile from '@/modules/profile/';
import Promo from '@/modules/promo/';
import { IState } from '@/types/store.types';

function App() {
  const location = useLocation();

  const bShowCreateFolderModal: boolean = useSelector(
    (state: IState) => state.files.bShowCreateFolderModal,
  );

  return (
    <div
      className='app'
      style={{
        background:
          location.pathname === '/'
            ? `url(${backgroundFull})`
            : `url(${background})`,
        height: '100%',
      }}
    >
      {bShowCreateFolderModal && <CreateFolderModal />}

      <Wrapper>
        <Header />
        <Content>
          <Routes>
            <Route path='/' element={<Promo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/recover' element={<Recover />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/files' element={<Files />} />
          </Routes>
        </Content>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  max-width: 1440px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main``;

export default App;
