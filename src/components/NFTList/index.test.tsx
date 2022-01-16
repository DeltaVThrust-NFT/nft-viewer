import { fireEvent, render, screen } from '@testing-library/react';
import NFTList from '.';
import MOCK_NFT from '../../assets/mockNFT.json';

test('renders', () => {
  // Set up.
  const ownedNFTs = [MOCK_NFT];
  const setSelectedNFT = jest.fn()
  render(<NFTList ownedNFTs={ownedNFTs} setSelectedNFT={setSelectedNFT} />);
  const image = screen.getByAltText(MOCK_NFT?.title);
  const title = screen.getByText(MOCK_NFT?.title);

  // Assertions.
  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();

  // Set up.
  const button = screen.getByRole('button');
  fireEvent.click(button);

  // Assertions.
  expect(setSelectedNFT).toHaveBeenCalledTimes(1);
});
