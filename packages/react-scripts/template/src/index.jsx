import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './routes';

const App = () => (
  <main>
    <Routes />
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));

