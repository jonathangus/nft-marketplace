import * as React from 'react'
import { FC } from 'react'
import useNfts from '../hooks/useNfts'

type Props = {}

const List: FC<Props> = () => {
  const { items } = useNfts()

  return (
    <ul>
      {items.map((item) => (
        <li key={item.tokenId}>
          <div>
            <h2>{item.name}</h2>
            <div>{item.description}</div>
            <img src={item.image} style={{ width: 150 }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
