import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from "./Pages/Home.jsx";
import Error from "./Pages/Error.jsx";
import Profile from "./Pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Error/>} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
);
