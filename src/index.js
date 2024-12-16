import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure to import from 'react-dom/client'
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
