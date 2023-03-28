import React from 'react';
import App from './App.js';
import './index.css';
import { createRoot } from 'react-dom/client';

// Ctrl + K + C



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

//createRoot.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);