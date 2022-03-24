import { render } from '@testing-library/react';
import React from 'react';
import App from './app';

describe('App', () => {
  it('should match snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
