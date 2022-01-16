import { render, screen } from '@testing-library/react';
import Loading from '.';

test('renders', () => {
  // Set up.
  render(<Loading />);
  const element = screen.getByText(/Loading your NFTs.../i);

  // Assertions.
  expect(element).toBeInTheDocument();
});
