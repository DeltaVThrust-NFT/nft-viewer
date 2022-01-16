import { render, screen } from '@testing-library/react';
import InstallMetaMask from '.';

test('renders', () => {
  // Set up.
  render(<InstallMetaMask />);
  const element = screen.getByText(/We did not detect MetaMask. You will need to refresh this page after installing it./i);

  // Assertions.
  expect(element).toBeInTheDocument();
});
