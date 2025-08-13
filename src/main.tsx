import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from '/App.tsx';
import './index.css';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <Router />
    </React.StrictMode>,
);