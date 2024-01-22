import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import Add from '../components/Add';
import HelloWorld from '../components/HelloWorld';
import React from 'react';

const RouteIndex = () => {
    return (
        <div className="bg-white">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add" element={<Add />} />
                <Route path="/hello" element={<HelloWorld />} />
            </Routes>
        </Router>
        </div>
    )
}

export default RouteIndex;