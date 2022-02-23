import multicall from '../../deployments/localhost/Multicall.json'
import nft from '../../deployments/localhost/NFT.json'
import nftMarket from '../../deployments/localhost/NFTMarket.json'

export const getAddresses = (): Record<string, string> => ({
  multicall: multicall.address, // process.env.NEXT_PUBLIC_MULTICALL_ADDRESS,
  nft: nft.address, //process.env.NEXT_PUBLIC_NFT_ADDRESS,
  nft_market: nftMarket.address, //process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS,
})

export const getMultiCallAddress = (): string => {
  return getAddresses().multicall
}

export const getNftAddress = (): string => {
  return getAddresses().nft
}

export const getNftMarketAddress = (): string => {
  return getAddresses().nft_market
}
