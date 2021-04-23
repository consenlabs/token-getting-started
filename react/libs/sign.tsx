import React, { useMemo, useState } from 'react'
import { Button, Card, Code, Snippet, Spacer, Text } from '@geist-ui/react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
const MESSAGE = 'imToken'

const Sign: React.FC<unknown> = () => {
  const [result, setResult] = useState<string>('')
  const { active, account, library } = useWeb3React<Web3Provider>()
  const isConnected = useMemo(() => active && account, [account, active])

  const clickHandler = async () => {
    if (!isConnected) return
    const signer = library.getSigner(account)
    try {
      const result = await signer.signMessage(MESSAGE)
      setResult(result)
    } catch (err) {
      if (err?.errorCode === 1001) {
        return alert('You canceled the operation.')
      }
      alert(err.message)
    }
  }

  return (
    <div>
      <Text size={14}>2. Signing of the following strings:</Text>
      <Card>
        <Code>{MESSAGE}</Code>
      </Card>
      <Spacer y={0.5} />
      <Snippet symbol="" text={['Signature Result:', result]} width="100%" />
      <Spacer y={0.5} />
      <Button
        type="secondary-light"
        auto
        size="small"
        disabled={!isConnected}
        onClick={clickHandler}>
        Sign
      </Button>
    </div>
  )
}

export default Sign
