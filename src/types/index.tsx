export interface NFT {
  alternateMedia: { uri: string }[]
  contract: {
    address: string
  }
  description: string
  externalDomainViewUrl: string
  id: {
    tokenId: string
    tokenMetadata: {
      tokenType: string
    }
  }
  media: {
    uri: string
  }
  metadata: {
    attributes: object[]
    background_color: string
    description: string
    external_url: string
    image: string
    liveModel: string
    name: string
    poster: string
  }
  timeLastUpdated: string
  title: string
}
