import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const getLibrary = () => {
  const provider = (window as any).web3.currentProvider
  return new Web3Provider(provider)
}

const Application: NextPage<AppProps<unknown>> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hello imToken</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32" />
        <meta name="google" content="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <GeistProvider>
        <CssBaseline />
        <Web3ReactProvider getLibrary={getLibrary}>
          <Component {...pageProps} />
        </Web3ReactProvider>
      </GeistProvider>
    </>
  )
}

export default Application
