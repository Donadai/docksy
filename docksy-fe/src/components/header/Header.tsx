import './Header.scss';

import { useAuth0 } from '@auth0/auth0-react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div className="header-container">
      <div className="logo">
        <img src="/images/docksy/docksy-logo.png" alt="Docksy Logo" className="logo" />
      </div>
      <div className="search-explore-tabs">
        <Tabs value={false}>
          <Tab label="Search" component={Link} to="/search" />
          <Tab label="Explore" component={Link} to="/explore" />
        </Tabs>
      </div>
      <div className="other-tabs">
        <Tabs value={false}>
          {isAuthenticated ? (
            <>
              <Tab label="Saved" component={Link} to="/saved" />
              <Tab label="Bookings" component={Link} to="/bookings" />
              <Tab label="Profile" component={Link} to="/profile" />
              <Tab label="Logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} />
            </>
          ) : (
            <Tab label="Login" onClick={() => loginWithRedirect()} />
          )}
        </Tabs>
      </div>
    </div>
  );
};
export default Header;
