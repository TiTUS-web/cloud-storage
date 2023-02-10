import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '63px 0',
      }}
    >
      <Link to='/promo'>
        <Logo>SkyCloud</Logo>
      </Link>

      <Navigation>
        <Link to='/info'>
          <NavigationLink>Info</NavigationLink>
        </Link>
        <Link to='/files'>
          <NavigationLink>My Files</NavigationLink>
        </Link>
        <Link to='/profile'>
          <NavigationLink>Profile</NavigationLink>
        </Link>
      </Navigation>

      <Actions>
        <Link to='/login'>
          <ActionsButton>Login</ActionsButton>
        </Link>
        <Link to='/register'>
          <ActionsButton>Sign Up</ActionsButton>
        </Link>
      </Actions>
    </header>
  );
};

const Logo = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #ffffff;
  transition: 0.2s;

  :hover {
    color: #bb6df3;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 280px;
`;

const NavigationLink = styled.span`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: #bb6df3;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 282px;
`;

const ActionsButton = styled.button`
  width: 132px;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #ffffff;
  outline: none;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.2s;

  :hover {
    border: 1px solid #bb6df3;
    background: #fff;
    color: #bb6df3;
    border-radius: 30px;
    outline: none;
  }
`;

export default Header;
