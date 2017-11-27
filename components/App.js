import Link from 'next/link'
import Head from './Head'
import Header from './layout/Header'
import Footer from './layout/Footer'
// import globalStyles from '../../styles/index.scss'

export default ({ children, title }) => (
  <div>
    <Head title={title} />
    {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
    <Header />
    {children}
    <Footer />
  </div>
)
