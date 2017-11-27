// main wrapper component - layout, universal styles, etc.
import Link from 'next/link'
import Head from './Head'
import Header from './layout/Header'
import Footer from './layout/Footer'

// import globalStyles from '../../styles/index.scss'

export default ({ children, title }) => (
  <div>
    <Head title={title} />
    <Header />
    {children}
    <Footer />
    <style jsx global>{``}</style>
    {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
  </div>
)
