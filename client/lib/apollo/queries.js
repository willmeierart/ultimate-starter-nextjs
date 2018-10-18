import gql from 'graphql-tag'

export const allSamples = gql`
  query allSamples {
    allSamples {
      sample
    }
  }
`
