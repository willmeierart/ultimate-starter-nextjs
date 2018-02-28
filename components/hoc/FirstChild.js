// for wrapper components that take 'component' as a prop, allows stripping of that outer layer

import React from 'react'

export default function FirstChild (props) {
  const childrenArray = React.Children.toArray(props.children)
  return childrenArray[0] || null
}
