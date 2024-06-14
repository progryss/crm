import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Customer from './components/Customer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="main-content-css">
                    <Routes>
                    <Route path="/" element={<Customer />} />
                        <Route path="/customer" element={<Customer />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
