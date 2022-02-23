import { Web3ReactProvider } from '@web3-react/core'
import { FC } from 'react'
import {
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
} from '@usedapp/core'
import { useDappConfig } from '../config/web3'

const Web3ProviderComp: FC = ({ children }) => (
  <DAppProvider config={useDappConfig}>{children}</DAppProvider>
)

export default Web3ProviderComp
