import * as React from 'react'
import { FC } from 'react'
import { ethers } from 'ethers'
import useWeb3 from '../hooks/useWeb3'
import { useChainCall } from '@usedapp/core'

const Header: FC = () => {
  const { connect, account, disconnect } = useWeb3()

  return (
    <header>
      {' '}
      <div>
        <div>
          <button onClick={account ? disconnect : connect}>
            {account ? 'Discconect' : 'Connect'}
          </button>
        </div>
        {account && <p>Account: {account}</p>}
      </div>
    </header>
  )
}

export default Header
