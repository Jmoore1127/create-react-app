import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { NotFound } from './not-found.component';

const renderComponent = (props = {}) => render(<NotFound {...props} />);

describe('not-found.component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeDefined();
  });
});

