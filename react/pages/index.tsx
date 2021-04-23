import * as React from 'react'
import { Divider, Page, Text } from '@geist-ui/react'
import Connector from '../libs/connector'
import Sign from '../libs/sign'

const Index: React.FC<unknown> = () => {
  return (
    <Page size="mini" className="home">
      <Text h2 size={22}>
        Hello imToken
      </Text>
      <Connector />
      <Divider y={4} />
      <Sign />
      <style jsx>{`
        :global(.home main) {
          padding-top: 0;
        }
      `}</style>
    </Page>
  )
}

export default Index
