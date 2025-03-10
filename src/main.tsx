import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Profile from './pages/Profile/';
import NotFound from './pages/NotFound'; // Importa a página 404

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile/:username" element={<Profile />} /> 
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

document.addEventListener('DOMContentLoaded', function (event: Event) {
    const container = document.getElementById('root');
    
    if (container) {
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <Main />
            </React.StrictMode>
        );
    } else {
        console.error('Elemento root não encontrado no DOM.');
    }
});

export default Main;
