import { Link } from 'react-router-dom';
import '../styles/navigationBar.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

interface NavigationBarProps {
  isLoggedIn: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to='/'>
          <img src="/images/docksy/docksy-logo.png" alt="Docksy Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Explore</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <>
            <li>
                <LoginButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
