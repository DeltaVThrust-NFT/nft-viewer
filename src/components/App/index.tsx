// Node modules.
import { useState } from 'react';
import axios from 'axios';
// Relative imports.
import './styles.css';
import Connect from '../Connect';
import InstallMetaMask from '../InstallMetaMask';
import Loading from '../Loading';
import NFTDetail from '../NFTDetail';
import NFTList from '../NFTList';
import { deriveNetworkName } from '../../utils';
import { NFT } from '../../types';

declare global {
  interface Window { ethereum: any; }
}

function App() {
  // Derive our state.
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [fetching, setFetching] = useState<boolean>(false);
  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
  const [selectedNFT, setSelectedNFT] = useState<any>(undefined);

  // Used to reset state on disconnect.
  const onDisconnect = () => {
    setAccount(undefined);
    setOwnedNFTs([]);
    setSelectedNFT(undefined);
  }

  // Used to connect to the user's wallet.
  const onWalletConnect = async () => {
    // Escape early if no wallet is connected.
    if (!window.ethereum) {
      return;
    }

    // Set our account.
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setAccount(account);

    // Set our fetching state.
    setFetching(true);

    // Fetch the NFT data.
    const response = await axios.get(`https://eth-${deriveNetworkName()}.g.alchemy.com/${process.env.REACT_APP_ALCHEMY_API_KEY}/v1/getNFTs/?owner=${account}`);
    const ownedNFTs = await Promise.all(response?.data?.ownedNfts?.map(async (nft: any) => {
      const response = await axios.get(`https://eth-${deriveNetworkName()}.g.alchemy.com/${process.env.REACT_APP_ALCHEMY_API_KEY}/v1/getNFTMetadata/?contractAddress=${nft?.contract?.address}&tokenId=${nft?.id?.tokenId}`);
      return {
        ...nft,
        ...response?.data,
      }
    }));

    // Set our state.
    setOwnedNFTs(ownedNFTs);

    // Set our fetching state.
    setFetching(false);

    // Set up listeners for wallet changes.
    window.ethereum.on('accountsChanged', onDisconnect);
    window.ethereum.on('chainChanged', onDisconnect);
    window.ethereum.on('disconnect', onDisconnect);
  };

  // Show metamask ad if MetaMask is not installed.
  if (!window?.ethereum?.isMetaMask) {
    return (
      <InstallMetaMask />
    );
  }

  // Show the connect button if not connected.
  if (!account) {
    return (
      <Connect onWalletConnect={onWalletConnect} />
    );
  }

  // Show the loading screen if we are fetching NFTs.
  if (fetching) {
    return (
      <Loading />
    );
  }

  // Show the selected NFT detail page.
  if (selectedNFT) {
    return (
      <NFTDetail selectedNFT={selectedNFT} setSelectedNFT={setSelectedNFT} />
    );
  }

  // Show the list of NFTs.
  return (
    <NFTList ownedNFTs={ownedNFTs} setSelectedNFT={setSelectedNFT} />
  );
}

export default App;
