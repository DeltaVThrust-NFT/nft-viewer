// Relative imports.
import arrowSVG from '../../assets/svgs/arrow.svg';
import externalLinkSVG from '../../assets/svgs/external-link.svg';
import imageSVG from '../../assets/svgs/image.svg';
import { NFT } from '../../types';

interface NFTDetailProps {
  selectedNFT: NFT,
  setSelectedNFT: (nft: NFT | undefined) => void,
};

const NFTDetail = ({ selectedNFT, setSelectedNFT }: NFTDetailProps) => {
  return (
    <main>
      <h1>NFT Viewer</h1>

      <div className="nft-detail">
        <div className="nft-detail-image" style={{ background: selectedNFT?.metadata?.background_color || '#ffffff' }}>
          {selectedNFT?.metadata?.image ? (
            <img alt={selectedNFT?.title} src={selectedNFT?.metadata?.image} />
          ) : (
            <div className="nft-detail-image-placeholder">
              <img alt="placeholder" src={imageSVG} />
            </div>
          )}
          <button
            className="back"
            data-testid="back"
            onClick={() => setSelectedNFT(undefined)}
            type="button"
          >
            <img alt="arrow" src={arrowSVG} />
          </button>
          <button
            className="external-link"
            data-testid="external-link"
            onClick={() => window.open(selectedNFT?.externalDomainViewUrl, '_blank')}
            type="button"
          >
            <img alt="external link" src={externalLinkSVG} />
          </button>
        </div>

        {/* Title + Description */}
        <h2>{selectedNFT?.title}</h2>
        <p>{selectedNFT?.description}</p>

        <div className="nft-detail-extra">
          <div className="attributes">
            <h3>Attributes</h3>
            {selectedNFT?.metadata?.attributes?.map((attribute: any, index: number) => (
              <div className="attribute" key={index}>
                {Object.keys(attribute).map((key: string) => (
                  <div className="key-value-pair" key={`${key}-${index}`}>
                    <span className="key">{key}:</span>
                    <span className="value">{attribute[key]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="other">
            <h3>Other information</h3>
            {selectedNFT?.contract?.address && (
                <div className="key-value-pair">
                <span className="key">Contract address:</span>
                <span className="value">{selectedNFT?.contract?.address}</span>
              </div>
            )}
            {selectedNFT?.id?.tokenId && (
                <div className="key-value-pair">
                <span className="key">Token ID:</span>
                <span className="value">{selectedNFT?.id?.tokenId}</span>
              </div>
            )}
            {selectedNFT?.id?.tokenMetadata?.tokenType && (
                <div className="key-value-pair">
                <span className="key">Token Type:</span>
                <span className="value">{selectedNFT?.id?.tokenMetadata?.tokenType}</span>
              </div>
            )}
            {selectedNFT?.timeLastUpdated && (
              <div className="key-value-pair">
                <span className="key">Last updated:</span>
                <span className="value">{selectedNFT?.timeLastUpdated}</span>
              </div>
            )}
            {selectedNFT?.externalDomainViewUrl && (
              <div className="key-value-pair">
                <span className="key">Raw JSON:</span>
                <a
                  className="value"
                  href={selectedNFT?.externalDomainViewUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  View in a new tab.
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default NFTDetail;
