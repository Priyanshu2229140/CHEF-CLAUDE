import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root'); // Define container first
const root = createRoot(container); // Create root only once

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
