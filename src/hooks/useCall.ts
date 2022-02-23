import { useContractCall } from '@usedapp/core'
import { UseFactoryValue } from './useFactory'

// type UseCallValue = {
//   data: <T>,
//   status: "loading" | "error" | "success",
//   error: Error
// }

const useCall = (
  factoryInstance: UseFactoryValue,
  method: string,
  args?: any[]
) => {
  const res = useContractCall({
    abi: factoryInstance.factory.createInterface(),
    address: factoryInstance.contract.address,
    method,
    args: args || [],
  })

  return res && res[0]
}

export default useCall
