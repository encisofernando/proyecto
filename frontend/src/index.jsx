// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambia la importación
import App from './App';

const root = createRoot(document.getElementById('root')); // Crear la raíz
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
