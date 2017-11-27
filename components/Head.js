import Head from 'next/head'

const initialProps = {
  title: 'Agency Zero',
  initialScale: '1.0'
}

export default (props = initialProps) => {
  const { title, initialScale } = props
  return (
    <Head>
      <title>{title}</title>
      <meta charset='utf-8' />
      <meta name='viewport' content={`inital-scale=${initialScale || initialProps.initialScale}, width=device-width`}/>
    </Head>
  )
}
