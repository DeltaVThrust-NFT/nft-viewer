import { fireEvent, render, screen } from '@testing-library/react';
import Connect from '.';

test('renders', () => {
  // Set up.
  const handleClick = jest.fn()
  render(<Connect onWalletConnect={handleClick} />);
  const element = screen.getByText(/Connect/i);
  fireEvent.click(element);

  // Assertions.
  expect(handleClick).toHaveBeenCalledTimes(1);
});
