import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Home } from './home.component';

const renderComponent = (props = {}) => render(<Home {...props} />);

describe('home.component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeDefined();
  });
});

