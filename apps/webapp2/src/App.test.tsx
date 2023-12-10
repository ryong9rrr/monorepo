import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';

describe('App test', () => {
  test('render test', () => {
    render(<App />);
    screen.getByText(/Hello Vite/i);
  });
});
