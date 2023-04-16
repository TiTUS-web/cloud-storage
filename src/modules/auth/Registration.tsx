import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Auth from '@/api/Auth';
import { AuthActionTypes } from '@/types/auth.types';
import {
  emitErrorMessages,
  emitSuccessMessages,
} from '@/utils/toastifyActions';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const oAuth = new Auth();
  const dispatch = useDispatch();

  const handleRegistration = () => {
    oAuth
      .registration({ username, email, password })
      .then((oUser) => {
        dispatch({
          type: AuthActionTypes.REGISTRATION,
          payload: oUser,
        });
        emitSuccessMessages('You have successfully registered');
        navigate('/files');
      })
      .catch((err) => {
        emitErrorMessages(err);
      });
  };

  return (
    <div className='register' style={{ padding: '189px 0px 150px' }}>
      <Title>Register</Title>
      <Container>
        <Block>
          <Label>Username</Label>
          <Input
            onChange={(event: Event | any) => setUsername(event.target.value)}
            placeholder='Enter username'
            type='text'
          />
        </Block>
        <Block>
          <Label>Email</Label>
          <Input
            onChange={(event: Event | any) => setEmail(event.target.value)}
            placeholder='Enter email'
            type='text'
          />
        </Block>
        <Block>
          <Label>Password</Label>
          <Input
            onChange={(event: Event | any) => setPassword(event.target.value)}
            placeholder='Enter password'
            type='password'
          />
        </Block>
        <Button onClick={handleRegistration}>Register</Button>
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

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 630px;
  flex-direction: column;
`;

const Block = styled.div`
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
  padding: 20px 30px 20px 57px;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: #adadad;
  border: 0;
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

export default Registration;
