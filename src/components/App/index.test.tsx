import { render, screen } from '@testing-library/react';
import App from '.';

test('renders InstallMetaMask by default', () => {
  // Set up.
  render(<App />);
  const element = screen.getByText(/We did not detect MetaMask. You will need to refresh this page after installing it./i);

  // Assertions.
  expect(element).toBeInTheDocument();
});
