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
        <div className="mb-5">
          <h1 className="font-arcade font-bold text-5xl leading-9"><span className="text-green-500">^</span>level up<span className="text-green-500">^</span> your business, <span className="italic">enter</span> the <span>future</span>.</h1>
          <p className="my-3 font-mono leading-5">I design and build lightning fast, future-proof websites.</p>
        </div>
        <About />
        <Projects />
        <Portfolio />
      </Container>
    </div>
  )
}

export default index
