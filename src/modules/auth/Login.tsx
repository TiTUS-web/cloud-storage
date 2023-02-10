import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  return (
    <div className='login' style={{ padding: '189px 0px 150px' }}>
      <Title>Login</Title>
      <LoginContainer>
        <LoginBlock>
          <Label>Email</Label>
          <Input placeholder='mail@example.com' />
        </LoginBlock>
        <LoginBlock>
          <Label>Password</Label>
          <Input placeholder='***********' type='password' />
        </LoginBlock>
        <Button>Login</Button>
        <Link to='/recover'>
          <Span>Forget Password</Span>
        </Link>
      </LoginContainer>
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

const LoginContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 630px;
  flex-direction: column;
`;

const LoginBlock = styled.div`
  :not(:last-child) {
    margin-bottom: 37px;
  }
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: #3b3f8d;
  padding-left: 50px;
`;

const Input = styled.input`
  background: #f3f3f3;
  border-radius: 61px;
  width: 569px;
  padding: 30px 0 30px 57px;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: #adadad;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #43a1d6 0%, #907eff 100%);
  border-radius: 62px;
  padding: 26px 145px;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
`;

const Span = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #adadad;
  display: block;
  text-align: center;
  margin-top: 35px !important;
`;
export default Login;
