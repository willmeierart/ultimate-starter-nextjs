// apparently react doesn't want you to iterate over children as a simple array, this allows it.
// useful in the case of e.g. applying 'fadeColors' to
export const forEachChild = (array, callback) => {
  return Array.prototype.forEach.call(array, child => {
    callback(child)
  })
}

// takes the awkward format colors arrive in from GraphCMS and returns usable RGBA values
export const formatColors = (colors = []) => {
  return colors.map((each, i) => {
    const colorList = each.color.match(/\d+/g)
    let r = parseInt(colorList[0])
    let g = parseInt(colorList[1])
    let b = parseInt(colorList[2])
    let a = parseInt(colorList[3])
    return `rgba(${r},${g},${b},${a})`
  })
}

// since this is such a nice signature effect, go ahead and leave this here:
export const fadeColors = (element, colors, timing) => {
  const origColor = 'black' // element.style.color
  const randomDelay = Math.floor(Math.random() * timing) + 300
  const rD2 = Math.floor(Math.random() * (timing * 2))
  const randomColorIndex = Math.floor(Math.random() * 3)
  const interval = setInterval(() => {
    setTimeout(() => {
      element.style.color = colors[randomColorIndex]
      setTimeout(() => {
        element.style.color = origColor
      }, rD2)
    }, randomDelay)
    clearInterval(interval)
  }, 200)
}

// probably going to use something like this a lot (throw inside of position-relative container el):
export const renderGrid = (set, Component) => {
  return set.map((self, i) => {
    return (
      <div className='wrapper' key={i}>
        <Component self={self} />
        <style jsx>{`
          .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: none;
          }
        `}</style>
      </div>
    )
  })
}

// for apollo data loading:
export const checkAllQueriesError = queries => {
  queries.forEach(query => {
    if ([query].error) {
      return <h1>¯\_(ツ)_/¯</h1>
    }
  })
}
