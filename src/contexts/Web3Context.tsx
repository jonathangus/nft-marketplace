/* This context can be removed once all subpages are using the store directly instead of props */

import React, { createContext, FC, useContext } from 'react'

type Web3ContextType = {}

const Web3Context = createContext<Web3ContextType>({} as Web3ContextType)

export const Web3ContextProvider: FC = ({ children }) => {
  const value = {}

  const login = () => {}

  // disconnect
  // login
  // loggedIn
  // provider

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const Web3ContextConsumer = Web3Context.Consumer

export const useWeb3Context = (): Web3ContextType => {
  const store = useContext(Web3Context)
  if (!store) {
    throw new Error('Missing Web3Context.Provider')
  }
  return store
}
