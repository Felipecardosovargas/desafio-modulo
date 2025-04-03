// src/Main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import App from './App';

document.addEventListener('DOMContentLoaded', function (event: Event) {
    const container = document.getElementById('root');

    if (container) {
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <GlobalStyles />
                <App />
            </React.StrictMode>
        );
    } else {
        console.error('Elemento root não encontrado no DOM.');
    }
});

export default App;
