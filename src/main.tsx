import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found.');
}