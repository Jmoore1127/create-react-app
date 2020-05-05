import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Loading } from './loading.component';

const renderComponent = (props = {}) => render(<Loading {...props} />);

describe('loading.component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeDefined();
  });
});

