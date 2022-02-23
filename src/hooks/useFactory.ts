import { useMemo } from 'react'
import { ERC20 } from '../contracts/ERC20'
import { ERC20__factory } from '../contracts/factories/ERC20__factory'
import { FactoryInstance } from '../ts'
import useWeb3 from './useWeb3'
import * as Factory from '../contracts'

export type UseFactoryValue = {
  factory: ERC20__factory
  contract: FactoryInstance
}

const useFactory = (
  factory: keyof typeof Factory,
  address: string
): UseFactoryValue => {
  const { signer } = useWeb3()

  const contract = useMemo(
    () => Factory[factory].connect(address, signer),
    [address, signer]
  )

  return {
    contract,
    factory: Factory[factory],
  }
}

export default useFactory
