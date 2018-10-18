// literally HTML head - all SEO stuff, etc.
import Head from 'next/head'
import PropTypes from 'prop-types'

const initialProps = {
  title: 'Agency Zero',
  initialScale: '1.0'
}

const CustomHead = (props = initialProps) => {
  const { title, initialScale } = props
  return <Head>
    <title key='title'>{title}</title>
    <meta key='charset' charSet='utf-8' />
    <meta key='viewport' name='viewport' content={`initial-scale=${initialScale || initialProps.initialScale}, width=device-width, shrink-to-fit=no`} />
    <meta key='meta-title' name='title' content='Agency Zero' />
    <link rel='shortcut icon' href='/static/zero.ico' />
    <script defer src='https://use.fontawesome.com/releases/v5.0.6/js/all.js' />
    {/* <script async src='https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X' /> */}
    {/* <style dangerouslySetInnerHTML={{
      __html: `
      @font-face {
        font-family: 'xxxx';
        src: url('/static/assets/fonts/xxxxx.eot');
        src: url('/static/assets/fonts/xxxxx.woff') format('woff');
        font-weight: bold;
        font-style: normal;
      }
    `}} /> */}
  </Head>
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired
}

export default CustomHead
