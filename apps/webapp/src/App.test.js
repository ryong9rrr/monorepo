import { render, screen } from '@testing-library/react';
import App from './App';

test('App test', () => {
  render(<App />);
  screen.getByText(/Hello World/i);
});
