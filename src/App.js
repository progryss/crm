import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Customer from './components/Customer';
import LoginPage from './components/LoginPage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isAppInitialized = sessionStorage.getItem('isAppInitialized');

        if (!isAppInitialized) {
            // This block will only run on the first server start (or if session storage is cleared)
            localStorage.setItem('isLoggedIn', 'false');
            sessionStorage.setItem('isAppInitialized', 'true');
            setIsLoggedIn(false);
        } else {
            // Regular refresh behavior
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            setIsLoggedIn(loggedIn);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    };

    return (
        <Router>
            <div className="App">
                <AppContent isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
            </div>
        </Router>
    );
}

function AppContent({ isLoggedIn, handleLogin, handleLogout }) {
    const location = useLocation();

    const shouldDisplayHeader = () => {
        return !location.pathname.startsWith('/login');
    };

    return (
        <>
            {shouldDisplayHeader() && <Header handleLogout={handleLogout} />}
            <main className="main-content-css">
                <Routes>
                    <Route path="/" element={<Navigate to={isLoggedIn ? "/customer" : "/login"} />} />
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/customer" /> : <LoginPage handleLogin={handleLogin} />} />
                    <Route path="/customer" element={isLoggedIn ? <Customer /> : <Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to={isLoggedIn ? "/customer" : "/login"} />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
