import { Conflux } from 'js-conflux-sdk'

import abiCoin from './abi/Coin.json'
import abiOrderBook from './abi/orderBook.json'

const conflux = new Conflux({
  url: process.env.REACT_APP_CONFLUX_NODE_RPC,
  defaultGasPrice: 100, // The default gas price of your following transactions
  defaultGas: 1000000, // The default gas of your following transactions
  logger: console,
})

export const ContractCoin = {
  name: 'Coin',
  abi: abiCoin,
  contract: conflux.Contract({
    abi: abiOrderBook,
    address: process.env.REACT_APP_CONFLUX_COIN_ADDRESS,
  }),
}

export const ContractOrderBook = {
  name: 'orderBook',
  abi: abiOrderBook,
  contract: conflux.Contract({
    abi: abiOrderBook,
    address: process.env.REACT_APP_CONFLUX_COIN_ADDRESS,
  }),
}

export const ContractOrderBook_issueStock = {
  name: 'orderBook',
  abi: abiOrderBook[19],
  contract: conflux.Contract({
    abi: abiOrderBook,
    address: process.env.REACT_APP_CONFLUX_COIN_ADDRESS,
  }),
}

export default conflux