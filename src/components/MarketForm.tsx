import * as React from 'react'
import { FC, useState } from 'react'
import { NFT__factory } from '../contracts/factories/NFT__factory'
import useCreateNFT from '../hooks/old/useCreateNFT'
import { ipfsClient } from '../utils/ipfs'

type Props = {
  onCreate: () => {}
}

const MarketForm: FC<Props> = () => {
  const { create } = useCreateNFT()

  // const address = useAddress('mateCore')
  // const factoryInstance = useFactory(NFT__factory, address)
  // const { result, error, status } = useCall(factoryInstance)

  // useSubscription(factoryInstance, 'TransactionSubmit', () => {
  //   console.log('transasction done')
  // })

  // const onClick = () => {
  //   setLoading(true)
  //   factoryInstance.add('myNFT')

  //   factoryInstance.addAgain('myNFT')
  //   setLoading(false)
  // }

  const [fileUrl, setFileUrl] = useState(
    'https://ipfs.infura.io/ipfs/QmQ89DK4GFAejMh4SCxtWDRu5Di3WMrp6aZnzZ2pMtEfPS'
  )
  const [formInput, updateFormInput] = useState({
    price: '0.5',
    name: 'Test',
    description: 'Test',
  })

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await ipfsClient.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      })
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)

      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })
    try {
      const added = await ipfsClient.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`

      console.log('URL:::', url)
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      create(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='w-1/2 flex flex-col pb-12'>
        <input
          placeholder='Asset Name'
          className='mt-8 border rounded p-4'
          onChange={(e) =>
            updateFormInput({ ...formInput, name: e.target.value })
          }
        />
        <textarea
          placeholder='Asset Description'
          className='mt-2 border rounded p-4'
          onChange={(e) =>
            updateFormInput({ ...formInput, description: e.target.value })
          }
        />
        <input
          placeholder='Asset Price in Eth'
          className='mt-2 border rounded p-4'
          onChange={(e) =>
            updateFormInput({ ...formInput, price: e.target.value })
          }
        />
        <input type='file' name='Asset' className='my-4' onChange={onChange} />
        {fileUrl && <img className='rounded mt-4' width='350' src={fileUrl} />}
        <button
          onClick={createMarket}
          className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
        >
          Create Digital Asset
        </button>
      </div>
    </div>
  )
}

export default MarketForm
