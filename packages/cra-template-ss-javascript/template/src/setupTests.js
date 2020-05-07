// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { configureStore } from './redux/setup/store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

const renderComponent = (component, {
    reduxState = {},
    store = configureStore(reduxState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}) => ({
      ...render(
      <Provider store={store}>
        <Router history={history}>
          {component}
        </Router>
      </Provider>
  ),
  store,
  history
});

global.renderComponent = renderComponent