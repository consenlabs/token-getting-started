import React from 'react'
import { Button, Spacer } from '@geist-ui/react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'

const injected = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
})

const Connector: React.FC<unknown> = () => {
  const web3React = useWeb3React()

  const clickHandler = async () => {
    try {
      await web3React.activate(injected, walletError => {
        if (walletError.message.includes('user_canceled')) {
          return alert('You canceled the operation, please refresh and try to reauthorize.')
        }
        alert(`Failed to connect: ${walletError.message}`)
      })
    } catch (err) {
      alert('Failed to connect Wallet.')
    }
  }

  return (
    <div>
      <Spacer y={1.5} />
      <Button type="secondary-light" size="small" auto onClick={clickHandler}>
        Connect to Wallet
      </Button>
    </div>
  )
}

export default Connector
