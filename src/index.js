import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../styles/main.css'; // Import global styles

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React.StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
