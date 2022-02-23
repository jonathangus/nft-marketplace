import { useEtherBalance } from '@usedapp/core'
import * as React from 'react'
import { FC } from 'react'
import useCall from './useCall'
import useFactory from './useFactory'
import useWeb3 from './useWeb3'

const useBalance = () => {
  const { account } = useWeb3()
  // const factory = useFactory(
  //   'ERC20',
  //   '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  // )

  // const response = useCall(factory, 'balanceOf', [account])

  // return response && response[0]

  return useEtherBalance(account)
}

export default useBalance
