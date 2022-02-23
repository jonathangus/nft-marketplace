import { useContractCall } from '@usedapp/core'
import { BigNumber } from 'ethers'
import { getNftAddress, getNftMarketAddress } from '../config/addresses'
import { NFTMarket__factory, NFT__factory } from '../contracts'

const useListingPrice = (): BigNumber => {
  const result = useContractCall({
    abi: NFTMarket__factory.createInterface(),
    address: getNftMarketAddress(),
    method: 'getListingPrice',
    args: undefined,
  })

  return result && result[0]
}

export default useListingPrice
