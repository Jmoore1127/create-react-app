import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { configureStore } from './redux/setup/store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

export const renderComponent = (component, {
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