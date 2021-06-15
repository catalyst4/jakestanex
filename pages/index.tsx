import React from 'react'
import Head from 'next/head'
import { Container } from '../components/Container'
import { TextHeader } from '../components/TextHeader'

const index = () => {
  return (
    <div>
      <Head>
        <title>Jake Stanex</title>
      </Head>
      <Container>
        <TextHeader />
      </Container>
    </div>
  )
}

export default index
