import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Wind, User } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Data from './components/Data';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserContext from './context/UserContext';

function Navigation() {
  const location = useLocation();
  const { user, setUser } = React.useContext(UserContext);

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <Wind className="h-6 w-6 text-yellow-500 mr-2" />
            <span className="text-xl font-bold">Energia Ventosa</span>
          </Link>
          <Link to="/" className={`hover:text-yellow-500 ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:text-yellow-500 ${location.pathname === '/about' ? 'text-yellow-500' : ''}`}>
            About
          </Link>
          <Link to="/data" className={`hover:text-yellow-500 ${location.pathname === '/data' ? 'text-yellow-500' : ''}`}>
            Data
          </Link>
          <Link to="/contact" className={`hover:text-yellow-500 ${location.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.isAdmin && (
                <Link to="/admin" className="hover:text-yellow-500">
                  Admin
                </Link>
              )}
              <button onClick={() => setUser(null)} className="hover:text-yellow-500">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="flex items-center hover:text-yellow-500">
              <User className="h-5 w-5 mr-1" />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/data" element={<Data />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <footer className="bg-black text-white py-4 text-center">
            <p>© 2024 - Energia Ventosa</p>
          </footer>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;