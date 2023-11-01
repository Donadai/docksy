import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/search/Search';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Search />} />
          <Route path="/saved" element={<Search />} />
          <Route path="/bookings" element={<Search />} />
          <Route path="/profile" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
