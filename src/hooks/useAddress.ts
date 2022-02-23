
enum AddressThing = {
    MATE_CORE
}

const addresses: Record<AddressThing, string> = {
  [97]: 'assasd',
  [56]: 'sadasd',
}

// get address
const useAddress = () => {
  const [chain] = useWeb3()

  return addresses[chain]
}
