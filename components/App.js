// main wrapper component - layout, universal styles, etc.
import Link from 'next/link'
import Head from './Head'
import Header from './layout/Header'
import Footer from './layout/Footer'

// import globalStyles from '../../styles/index.scss'

const App = ({ children, title }) => (
  <div>
    <Head title={title} />
    <Header />
    { children }
    <Footer />
    <style jsx global>{``}</style>
    {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
  </div>
)

export default App
