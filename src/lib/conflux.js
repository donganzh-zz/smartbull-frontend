import { Conflux } from 'js-conflux-sdk'

import abiOrderBook from './abi/orderBook.json'

const conflux = new Conflux({
  url: process.env.REACT_APP_CONFLUX_NODE_RPC,
  defaultGasPrice: 100, // The default gas price of your following transactions
  defaultGas: 1000000, // The default gas of your following transactions
  logger: console,
})

export const ContractOrderBook = {
  name: 'OrderBook',
  abi: abiOrderBook,
  contract: conflux.Contract({
    abi: abiOrderBook,
    address: process.env.REACT_APP_CONFLUX_ORDERBOOK_ADDRESS,
  }),
}


export default conflux