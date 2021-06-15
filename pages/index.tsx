import React from 'react'
import Head from 'next/head'
import { Container } from '../components/Container'
import { TextHeader } from '../components/TextHeader'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Portfolio } from '../components/Portfolio'

const index = () => {
  return (
    <div>
      <Head>
        <title>Jake Stanex</title>
      </Head>
      <Container>
        <TextHeader />
        <About />
        <Projects />
        <Portfolio />
      </Container>
    </div>
  )
}

export default index
