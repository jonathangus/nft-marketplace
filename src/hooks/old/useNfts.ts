import { useContractCall, useContractCalls } from '@usedapp/core'
import { useEffect, useState } from 'react'
import { getNftAddress, getNftMarketAddress } from '../config/addresses'
import { MarketItem, MarketMeta } from '../config/types'
import { NFTMarket__factory, NFT__factory } from '../contracts'

const useNfts = (): {
  items: MarketItem[]
  loading: boolean
} => {
  const [meta, setMeta] = useState<Record<string, MarketMeta>>({})
  const [marketItems] =
    useContractCall({
      abi: NFTMarket__factory.createInterface(),
      address: getNftMarketAddress(),
      method: 'fetchMarketItems',
      args: [],
    }) || []

  const tokenURICalls =
    marketItems?.map((item) => {
      return {
        abi: NFT__factory.createInterface(),
        address: getNftAddress(),
        method: 'tokenURI',
        args: [item.tokenId],
      }
    }) || []

  const tokenURIs = useContractCalls(tokenURICalls) || []

  useEffect(() => {
    tokenURIs.map(async (tokenUri, i) => {
      if (tokenUri) {
        const tokenId = tokenURICalls[i].args[0].toString()
        const data = await (await fetch(tokenUri[0])).json()
        setMeta((prev) => ({ ...prev, [tokenId]: data }))
      }
    })
  }, [tokenURIs])

  const items =
    marketItems?.map((item) => {
      const data = meta[item.tokenId.toString()]

      return {
        price: item.price,
        tokenId: item.tokenId.toNumber(),
        seller: item.seller,
        owner: item.owner,
        image: data?.image,
        name: data?.name,
        description: data?.description,
      }
    }) || []

  return {
    items,
    loading: false,
  }
}

export default useNfts
