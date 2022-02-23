import { useEffect } from 'react'

const useSubscription = (factoryInstance, eventName, callback) => {
  useEffect(() => {
    contract.on('asd')

    return () => contract.off('asd')
  }, [])
}
