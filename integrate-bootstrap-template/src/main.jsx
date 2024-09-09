import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../src/all.min.css';
import '../src/all.min.js';
import '../src/fonts.css';

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
