import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import { store } from './redux';



const App = () => (
  <main>
    <Provider store={store}>
      <Routes />
    </Provider>
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));

