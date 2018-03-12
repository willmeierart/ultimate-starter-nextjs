// main wrapper component - layout, universal styles, etc.
import Link from 'next/link'
import Head from './Head'
import Header from './layout/Header'
import Footer from './layout/Footer'

// import globalStyles from '../../styles/index.scss'

const App = ({ children, title }) => (
  <div className='app-outer'>
    <Head title={title} />
    <div className='app-inner'>
      <header>
        <Header />
      </header>
      <main>{ children }</main>
      <footer>
        <Footer />
      </footer>
    </div>
    <style jsx global>{`
      a {
        text-decoration: none;
        color: inherit;
      }
      li {
        list-style: none;
      }
      html, body {
        {/* overflow: hidden!important;
        position: fixed!important; */}
      }
      body {
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
      }
      header {}
      footer {}
      main {}
    `}</style>
    {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
  </div>
)

export default App
