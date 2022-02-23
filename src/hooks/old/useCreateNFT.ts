import { useContractCall, useContractFunction, useEthers } from '@usedapp/core'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import { getNftAddress, getNftMarketAddress } from '../../config/addresses'
import { NFTMarket__factory, NFT__factory } from '../../contracts'
import { ipfsClient } from '../../utils/ipfs'
import useListingPrice from './useListingPrice'

const useCreateNFT = () => {
  // const listingPrice = useListingPrice()
  const { library, account } = useEthers()

  // useFactory(factory, address)
  // const { state, send } = useContractFunction(contract, 'withdraw', {
  //   transactionName: 'Unwrap',
  // })

  const create = async (url: string) => {
    try {
      const signer = library?.getSigner()
      const nftContract = NFT__factory.connect(getNftAddress(), signer)

      let transaction = await nftContract.createToken(url)
      let tx = await transaction.wait()
      let event = tx.events[0]
      let tokenId = event.args[2].toNumber()

      const nftMarketContract = NFTMarket__factory.connect(
        getNftMarketAddress(),
        signer
      )

      const listingPrice = await nftMarketContract.getListingPrice()
      const price = ethers.utils.parseUnits('1.69', 'ether')

      transaction = await nftMarketContract.createMarketItem(
        nftContract.address,
        tokenId,
        price,
        { value: listingPrice }
      )
      const result = await transaction.wait()
      console.log('result:', result)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  return {
    create,
  }
}

export default useCreateNFT
