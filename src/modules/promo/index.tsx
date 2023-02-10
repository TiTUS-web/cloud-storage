import styled from 'styled-components';

import { promo } from '../../images';

const Promo = () => {
  return (
    <section
      className='Promo'
      style={{
        padding: '189px 0 215px',
        background: `url(${promo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      <PromoBlock>
        <MainTitle>Personal and Business</MainTitle>
        <Line />

        <Title>STORE AND MANAGE ALL YOUR Files!</Title>
        <Text>
          Upload multiple files at once and keep them forever on this site. If
          you're using FireFox or Chrome, you can simply drag & drop your files
          to begin uploading
        </Text>
        <Button>Try SkyCloud Now</Button>
      </PromoBlock>
    </section>
  );
};

const PromoBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 585px;
`;

const MainTitle = styled.h1`
  font-weight: 900;
  font-size: 72px;
  line-height: 70px;
  text-transform: uppercase;
  color: #3b668d;
`;

const Line = styled.hr`
  width: 100%;
  background: #3b668d;
  margin: 32px 0 45px 0;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 156%;
  text-transform: uppercase;
  color: #3b668d;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: 0.075em;
  color: #2b4964;
`;

const Button = styled.button`
  margin-top: 27px;
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #5ac4ff 0%, #b250ff 100%);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 62px;
  max-width: 304px;
  padding: 24px 55px 24px 56px;
  transition: 0.2s;

  :hover {
    opacity: 0.7;
  }
`;

export default Promo;
