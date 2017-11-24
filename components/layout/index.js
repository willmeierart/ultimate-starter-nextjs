import Link from 'next/link'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import globalStyles from '../../styles/index.scss'

export default ({ children, title}) => (
  <div>
    <Head title={title} />
    <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
    <Header />
    { children }
    <Footer />
  </div>
)