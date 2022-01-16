// Relative imports.
import waveSVG from '../../assets/svgs/wave.svg';

const InstallMetaMask = () => {
  return (
    <main className="homepage">
      <h1>NFT Viewer</h1>
      <p className="warning">We did not detect MetaMask. You will need to refresh this page after installing it.</p>
      <a className="connect" href="https://metamask.io" rel="noreferrer noopener" target="_blank">Install MetaMask</a>
      <img alt="wave" className="wave" src={waveSVG} />
    </main>
  );
};

export default InstallMetaMask;
