import Head from 'next/head'
import Container from './components/Container'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div>

      <div className="flex h-screen">
          <Sidebar />
     

      <div className="w-screen">
            <Header />
            <Container />
      </div>

      </div>

    </div>
  )
}
