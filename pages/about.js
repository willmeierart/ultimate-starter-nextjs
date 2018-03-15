import AppProvider from '../lib/redux/AppProvider'
import Head from '../components/Head'

const About = () => (
  <AppProvider>
    <Head title='About' />
    <section>
      <div className='page-title'>About</div>
    </section>
    <style jsx>{``}</style>
  </AppProvider>
)

export default About
