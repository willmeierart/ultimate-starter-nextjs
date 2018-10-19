# 2018 Agency Zero FrontEnd Starter v04.1

## A modern web-dev standard for AZ projects
### a constant work in progress, updated with every project...

This iteration uses [Next.js](https://github.com/zeit/next.js) - an isomorphic/universal/SSR framework on top of React v16 for the fastest page loads and best SEO possible in a modern dev architecture. Its configuration is set up for integration with a headless [GraphCMS](https://graphcms.com/) GraphQL backend.

Other features include:
- Apollo 2 as a GraphQL client
- setup for a dynamic store, to choose between:
  - Redux for internal state management, with various reducers for setting user platform type state
  - Context API now available since Next@7
- an express server config for custom-routed pretty URLs
- custom webpack, babel, and postcss configs for various optimizations
- Sass (and pre/post-css webpack config) as an optional global fallback to Next's default 'Styled-JSX'
- prepared HOC's for animation with both react-motion and react-transition-group
- testing suites in both Jest and Chai (in progress)
- docker integration for quick deployment (in progress)

### NOTE

- first thing's first: search-and-replace-all ```xxx_project_name_xxx``` with 🥁🥁🥁🥁 ...the project name (use script)
  - and change first param in package.json to same thing
- same with ```xxx_project_name_xxx.com``` - (```xxx_project_name_xxx``` + tld)


*composed by Will Meier at Agency Zero*

😎

