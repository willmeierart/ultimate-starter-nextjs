// import { graphql, compose } from 'react-apollo'
// import Loader from 'react-loaders'
// import withData from '../lib/withData'
// import { allFadeColors, allPaintings } from '../lib/queries'
// import { formatColors } from '../lib/_utils'
import App from '../components'
import { AzLogo01 } from '../components/assets/ZeroLogos'

// include boilerplate for global loader dependent on graphql req's:
export default () => (
  <App title='Home'>
    <div>
      {/* {allThings1.loading || allThings2.loading ? (
        <div className='loader-wrapper'>
          <Loader type='line-spin-fade-loader' active />
        </div>
      ) : ( */}
      <AzLogo01 />
      {/* )} */}
    </div>
    <style jsx>{`
        {/* .loader-wrapper {
          width:100%; height:100%;
          display: flex; justify-content: center; align-items:center;
        } */}
    `}</style>
  </App>
)

// example of GraphQL with multiple queries composed:
// export default withData(
//   compose(
//     graphql(allThings1, { name: 'allThings1' }),
//     graphql(allThings2, { name: 'allThings2' })
//   )(HomePage)
// )
