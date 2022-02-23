import { useEthers } from '@usedapp/core'
import { JsonRpcSigner } from '@ethersproject/providers'

type UseWeb3Value = {
  account?: string
  connect: () => void
  disconnect: () => void
  signer?: JsonRpcSigner
}

const useWeb3 = (): UseWeb3Value => {
  const { activateBrowserWallet, account, deactivate, library, ...rest } =
    useEthers()

  return {
    account,
    connect: () => {
      activateBrowserWallet()
    },
    disconnect: () => {
      deactivate()
    },
    signer: library?.getSigner(),
  }
}

export default useWeb3
