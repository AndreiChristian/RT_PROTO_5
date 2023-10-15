import { Metadata } from 'next'
import { serverClient } from './_trpc/serverClient'

export const metadata: Metadata = {
  title: "Trpc works"
}

export default async function Home() {
  const data = await serverClient.getData()
  const setData = await serverClient.setData("foo")
  return (
    <main>
      <h1>The data is {data}</h1>
      <h1>The setdata is {setData}</h1>
    </main>
  )
}
