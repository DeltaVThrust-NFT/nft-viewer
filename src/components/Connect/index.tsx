// Relative imports.
import Wave from '../../assets/react-svgs/Wave';

interface ConnectProps {
  onWalletConnect: () => void
};

const Connect = ({ onWalletConnect }: ConnectProps) => {
  return (
    <main className="homepage">
      <h1>NFT Viewer</h1>
      <button className="connect" onClick={onWalletConnect} type="button">Connect</button>
      <Wave />
    </main>
  );
}

export default Connect;
