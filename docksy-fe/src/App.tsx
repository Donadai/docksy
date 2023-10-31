import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar isLoggedIn={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
