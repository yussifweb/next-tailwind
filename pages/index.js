import Head from 'next/head'
import Posts from '../src/components/home/posts'
import Layout from '../src/components/layout'
// import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts/>

    </Layout>
  )
}
