import { useEffect } from 'react'
import { getAddresses } from '../config/addresses'
import { NFTMarket__factory } from '../contracts/factories/NFTMarket__factory'
import useCall from './useCall'
import useFactory from './useFactory'
// import useMulticall from './useMulticall'

const useNFTS = () => {
  const factory = useFactory('NFTMarket__factory', getAddresses().nft_market)

  const marketItems = useCall(factory, 'fetchMarketItems')

  // const [marketItems] =
  //   useContractCall({
  //     abi: NFTMarket__factory.createInterface(),
  //     address: getNftMarketAddress(),
  //     method: 'fetchMarketItems',
  //     args: [],
  //   }) || []

  console.log(marketItems, getAddresses().nft_market)
  // const { result, error, status } = useMulticall(NFTMarket__factory)

  // return { result, error, status }
}

export default useNFTS
