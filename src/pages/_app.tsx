import * as React from 'react'
import { FC } from 'react'
import { DAppProvider } from '@usedapp/core'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useDappConfig } from '../config/web3'
import useNfts from '../hooks/old/useNfts'
import Web3Provider from '../providers/Web3Provider'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  )
}

export default App
