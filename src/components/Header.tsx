import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Auth from '@/api/Auth';
import { AuthActionTypes } from '@/types/auth.types';
import { IState } from '@/types/store.types';

const Header = () => {
  const oAuth = new Auth();
  const oUser = useSelector((state: IState) => state.auth.oUser) || oAuth.oUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    oAuth.logout();
    dispatch({
      type: AuthActionTypes.LOGOUT,
    });
    navigate('/login');
  };

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
      {oUser ? (
        <Username>{oUser.username}</Username>
      ) : (
        <Link to='/'>
          <Logo>SkyCloud</Logo>
        </Link>
      )}

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

      {oUser ? (
        <Actions>
          <ActionsButton onClick={handleLogout}>Logout</ActionsButton>
        </Actions>
      ) : (
        <Actions>
          <Link to='/login' style={{ marginRight: '20px' }}>
            <ActionsButton>Login</ActionsButton>
          </Link>
          <Link to='/registration'>
            <ActionsButton>Sign Up</ActionsButton>
          </Link>
        </Actions>
      )}
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

const Username = styled.span`
  font-weight: 700;
  font-size: 24px;
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
  justify-content: flex-end;
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
