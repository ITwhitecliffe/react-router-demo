import React from 'react'
import content from '../data/content'

function Contents() {
  return (
    <div>
      {content.map(info => (info.contents))}
    </div>
  )
}

export default Contents