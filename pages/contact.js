import AppProvider from '../lib/redux/AppProvider'
import Head from '../components/Head'

const Contact = () => (
  <AppProvider>
    <Head title='Contact' />
    <section>
      <div className='page-title'>Contact</div>
    </section>
    <style jsx>{``}</style>
  </AppProvider>
)

export default Contact
