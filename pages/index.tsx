import React from 'react'
import Head from 'next/head'
import { Container } from '../components/Container'
import { TextHeader } from '../components/TextHeader'
import { About } from '../components/About'

const index = () => {
  return (
    <div>
      <Head>
        <title>Jake Stanex</title>
      </Head>
      <Container>
        <TextHeader />
        <About />
      </Container>
    </div>
  )
}

export default index
