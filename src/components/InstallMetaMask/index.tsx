// Relative imports.
import Wave from '../../assets/react-svgs/Wave';

const InstallMetaMask = () => {
  return (
    <main className="homepage">
      <h1>NFT Viewer</h1>
      <p className="warning">We did not detect MetaMask. You will need to refresh this page after installing it.</p>
      <a className="connect" href="https://metamask.io" rel="noreferrer noopener" target="_blank">Install MetaMask</a>
      <Wave />
    </main>
  );
};

export default InstallMetaMask;
