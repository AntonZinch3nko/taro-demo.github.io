import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { Chakra } from './ui/Chakra';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Chakra>
            <Router>
                <App />
            </Router>
        </Chakra>
    </React.StrictMode>
);
