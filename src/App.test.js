import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders present button', () => {
  const { getByText } = render(<App />);
  const presentButton = getByText(/Present/i);
  expect(presentButton).toBeInTheDocument();
});
