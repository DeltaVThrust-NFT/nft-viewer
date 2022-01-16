// Relative imports.
import waveSVG from '../../assets/svgs/wave.svg';

interface ConnectProps {
  onWalletConnect: () => void
};

const Connect = ({ onWalletConnect }: ConnectProps) => {
  return (
    <main className="homepage">
      <h1>NFT Viewer</h1>
      <button className="connect" onClick={onWalletConnect} type="button">Connect</button>
      <img alt="wave" className="wave" src={waveSVG} />
    </main>
  );
}

export default Connect;
