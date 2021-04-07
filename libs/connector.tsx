import React, { useMemo } from 'react'
import { Button, Description, Spacer, Text } from '@geist-ui/react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

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
  const { activate, active, account } = useWeb3React<Web3Provider>()
  const message = useMemo<JSX.Element>(() => {
    if (!active) return <>{'Unconnected'}</>
    return <Text type="success">{`${account.slice(0, 10)}...${account.slice(-10)}`}</Text>
  }, [active, account])

  const clickHandler = async () => {
    try {
      if (active) return alert('Already linked')
      await activate(injected, walletError => {
        if (walletError.message.includes('user_canceled')) {
          return alert('You canceled the operation, please refresh and try to reauthorize.')
        }
        alert(`Failed to connect: ${walletError.message}`)
      })
    } catch (err) {
      console.log(err)
      alert('Failed to connect Wallet.')
    }
  }

  return (
    <div>
      <Spacer y={1.5} />
      <Description title="Current status" content={message} />
      <Spacer y={1} />
      <Button type="secondary-light" size="small" auto onClick={clickHandler}>
        Connect to Wallet
      </Button>
    </div>
  )
}

export default Connector
