import { Tabs, Tab, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box>
      <Tabs value={false}>
        <Tab label="Search" component={Link} to="/search" />
        <Tab label="Explore" component={Link} to="/explore" />
        <Tab label="Saved" component={Link} to="/saved" />
        <Tab label="Bookings" component={Link} to="/bookings" />
        <Tab label="Profile" component={Link} to="/profile" />
      </Tabs>
    </Box>
  );
}
export default Header;
