// Relative imports.
import imageSVG from '../../assets/svgs/image.svg';
import { NFT } from '../../types';

interface NFTListProps {
  ownedNFTs: NFT[],
  setSelectedNFT: (nft: NFT | undefined) => void,
}

const NFTList = ({ ownedNFTs, setSelectedNFT }: NFTListProps) => {
  return (
    <main>
      <h1>NFT Viewer</h1>

      <div className="nfts">
        {ownedNFTs.map((nft: any) => (
          <button
            className="nft"
            key={`${nft?.contract?.address}-${nft?.id?.tokenId}`}
            onClick={() => setSelectedNFT(nft)}
            type="button"
          >
            <div className="nft-image">
              {nft?.metadata?.image ? (
                <img alt={nft?.title} src={nft?.metadata?.image} />
              ) : (
                <div className="nft-image-placeholder">
                  <img alt="placeholder" src={imageSVG} />
                </div>
              )}
            </div>
            {nft?.title && (
              <div className="nft-details">
                <h2>{nft?.title}</h2>
              </div>
            )}
          </button>
        ))}
      </div>
    </main>
  );
}

export default NFTList;
