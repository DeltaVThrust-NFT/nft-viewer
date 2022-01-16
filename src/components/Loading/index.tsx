// Relative imports.
import waveSVG from '../../assets/svgs/wave.svg';

const Loading = () => {
  return (
    <main className="homepage">
      <p className="warning">Loading your NFTs...</p>
      <img alt="wave" className="wave" src={waveSVG} />
    </main>
  );
}

export default Loading;
