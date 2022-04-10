import { BncClient } from '@binance-chain/javascript-sdk'
import config from 'server/config'

export default function Bsc() {
  const client = new BncClient('https://xxx.api.com/')
  client.initChain()

  React.useEffect(() => {
    let myBalance = client.getBalance(config.WALLET_BSC)
    console.log(myBalance)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>BSC SDK JS</h1>
    </div>
  )
}
