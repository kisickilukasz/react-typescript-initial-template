import { render, screen } from '@testing-library/react';

import { App } from '../app';

test('renders app component', () => {
  render(<App />);
  expect(screen.getByTestId('test-div')).toBeInTheDocument();
});
