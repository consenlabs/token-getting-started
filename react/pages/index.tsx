import * as React from 'react'
import { Divider, Page, Text } from '@geist-ui/react'
import Connector from '../libs/connector'
import Sign from '../libs/sign'

const Index: React.FC<unknown> = () => {
  return (
    <Page pt="5vh" className="home">
      <Text h2 font="22px">
        Hello imToken
      </Text>
      <Connector />
      <Divider h={4} />
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
