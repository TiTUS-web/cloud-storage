import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import { background, backgroundFull } from './images';
import Login from './modules/auth/Login';
import Recover from './modules/auth/Recover';
import Register from './modules/auth/Register';
import Files from './modules/files/';
import Profile from './modules/profile/';
import Promo from './modules/promo/';

function App() {
  const location = useLocation();

  return (
    <div
      className='app'
      style={{
        background:
          location.pathname === '/promo'
            ? `url(${backgroundFull})`
            : `url(${background})`,
        height: '100%',
      }}
    >
      <AppWrapper>
        <Header />
        <AppContent>
          <Routes>
            <Route path='/promo' element={<Promo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/recover' element={<Recover />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/files' element={<Files />} />
          </Routes>
        </AppContent>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  max-width: 1440px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const AppContent = styled.main``;

export default App;
