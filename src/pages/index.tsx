import Link from 'next/link'
import { useState } from 'react'
import useCreateNFT from '../hooks/old/useCreateNFT'
import useNfts from '../hooks/useNFTs'
import MarketForm from '../components/MarketForm'
import List from '../components/List'
import useBalance from '../hooks/useBalance'
import { ethers } from 'ethers'

const IndexPage = () => {
  const [fileUrl, setFileUrl] = useState(null)

  const balance = useBalance()

  const a = useNfts()

  // const { create } = useCreateNFT()

  return (
    <div>
      <MarketForm />

      <div>
        <h1>Balance: {balance && ethers.utils.formatEther(balance)}</h1>{' '}
      </div>
    </div>
  )

  return (
    <div>
      <input type='file' name='Asset' className='my-4' onChange={onChange} />
      {fileUrl && <img className='rounded mt-4' width='350' src={fileUrl} />}
      <button
        onClick={create}
        className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
      >
        Create Digital Asset
      </button>
    </div>
  )
}

export default IndexPage
