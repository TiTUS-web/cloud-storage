import styled from 'styled-components';

const Profile = () => {
  return (
    <div className='profile' style={{ padding: '189px 0px 150px' }}>
      <Title>Profile</Title>
      <Container>
        <Block>
          <Label>Username</Label>
          <Input placeholder='Username' />
        </Block>
        <Block>
          <Label>Email</Label>
          <Input placeholder='Email' />
        </Block>
        <Block>
          <Label>Password</Label>
          <Input placeholder='Password' type='password' />
        </Block>
        <Block>
          <Label>New Password</Label>
          <Input placeholder='New Password' type='password' />
        </Block>
        <Block>
          <Label>Renew Password</Label>
          <Input placeholder='Renew Password' type='password' />
        </Block>
        <Button>Save</Button>
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

export default Profile;
