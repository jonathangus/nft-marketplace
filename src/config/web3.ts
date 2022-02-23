import {
  ChainId,
  Config,
  MULTICALL_ADDRESSES,
  LOCAL_CHAINS,
} from '@usedapp/core'
import {
  getMultiCallAddress,
  getNftAddress,
  getNftMarketAddress,
} from './addresses'

enum Chains {
  BSC_TESNET = 97,
}

const MULTICALL = {
  [Chains.BSC_TESNET]: '0xed386fe855c1eff2f843b910923dd8846e45c5a4',
}

const BSC_TESNET_CHAIN = 97

export const useDappConfig: Config = {
  readOnlyUrls: {
    [ChainId.Hardhat]: 'http://localhost:8545',
    [ChainId.Localhost]: 'http://localhost:8545',
  },
  multicallAddresses: {
    ...MULTICALL_ADDRESSES,
    ...MULTICALL,
    [ChainId.Hardhat]: getMultiCallAddress(),
    [ChainId.Localhost]: getMultiCallAddress(),
  },
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Goerli,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.xDai,
    ChainId.Localhost,
    ChainId.Hardhat,
    ChainId.BSC,
    Chains.BSC_TESNET,
    ...LOCAL_CHAINS,
  ],
}
