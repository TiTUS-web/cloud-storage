import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import { background } from './images';
import Promo from './modules/promo/';

function App() {
  return (
    <div
      className='app'
      style={{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        height: '100%',
      }}
    >
      <AppWrapper>
        <Header />
        <AppContent>
          <Routes>
            <Route path='/promo' element={<Promo />} />
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
