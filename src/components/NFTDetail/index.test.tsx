import { fireEvent, render, screen } from '@testing-library/react';
import NFTDetail from '.';
import MOCK_NFT from '../../assets/mockNFT.json';

test('renders', () => {
  // Set up.
  const selectedNFT = MOCK_NFT;
  const setSelectedNFT = jest.fn()
  render(<NFTDetail selectedNFT={selectedNFT} setSelectedNFT={setSelectedNFT} />);
  const image = screen.getByAltText(selectedNFT?.title);
  const back = screen.getByTestId('back');
  const externalLink = screen.getByTestId('external-link');
  const h2 = screen.getByText(selectedNFT?.title);
  const p = screen.getByText(/POW NFT 4795. A Silicon atom/i);
  const attributesHeader = screen.getByText(/Attributes/i);
  const otherHeader = screen.getByText(/Other information/i);

  // Assertions.
  expect(image).toBeInTheDocument();
  expect(back).toBeInTheDocument();
  expect(externalLink).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(p).toBeInTheDocument();
  expect(attributesHeader).toBeInTheDocument();
  expect(otherHeader).toBeInTheDocument();

  // Set up.
  fireEvent.click(back);

  // Assertions.
  expect(setSelectedNFT).toHaveBeenCalledTimes(1);
});
