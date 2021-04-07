import * as React from 'react'
import { Page, Text } from '@geist-ui/react'
import Connector from '../libs/connector'

const Index: React.FC<unknown> = () => {
  return (
    <Page size="mini" className="home">
      <Text h2 size={22}>
        Hello imToken
      </Text>
      <Text size={14}>Click connect wallet to start using the DApp.</Text>
      <Connector />
      <style jsx>{`
        :global(.home main) {
          padding-top: 0;
        }
      `}</style>
    </Page>
  )
}

export default Index
