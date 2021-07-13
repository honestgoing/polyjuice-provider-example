import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Godwoken Polyjuice E2E Tester/i);
  expect(linkElement).toBeInTheDocument();
});
